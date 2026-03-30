import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

function getMarkdownFilesRecursive(dir) {
  const results = []
  const list = fs.readdirSync(dir, { withFileTypes: true })
  list.forEach((ent) => {
    const res = path.resolve(dir, ent.name)
    if (ent.isDirectory()) {
      results.push(...getMarkdownFilesRecursive(res))
    } else if (ent.isFile() && res.endsWith('.md')) {
      results.push(res)
    }
  })
  return results
}

function getFilesRecursive(dir) {
  const results = []
  const list = fs.readdirSync(dir, { withFileTypes: true })
  list.forEach((ent) => {
    const res = path.resolve(dir, ent.name)
    if (ent.isDirectory()) {
      results.push(...getFilesRecursive(res))
    } else if (ent.isFile()) {
      results.push(res)
    }
  })
  return results
}

function encodeAssetPath(p) {
  return encodeURIComponent(p).replace(/'/g, "%27")
}

function preserveIntentionalSpacing(text) {
  // Keep extra blank-line spacing by turning additional newlines into <br> lines.
  return text.replace(/\n{3,}/g, (match) => {
    const extraBreaks = Math.max(1, match.length - 2)
    return `\n\n${'<br />\n'.repeat(extraBreaks)}\n`
  })
}

async function renderMarkdown(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(raw)

  const basedir = path.dirname(filePath)

  // Preserve intentional large spacing between markdown blocks.
  let transformed = preserveIntentionalSpacing(content)

  // Handle Obsidian-style embeds: ![[path|alt]] or ![[path]]
  transformed = transformed.replace(/!\[\[([^\]]+)\]\]/g, (match, inner) => {
    const parts = inner.split('|')
    let fileRef = parts[0].trim()
    const alt = parts[1] ? parts[1].trim() : ''
    // remove block refs (#^...) or headings (#...) after filename
    fileRef = fileRef.split('#')[0]
    // skip if it looks like an absolute URL
    if (/^https?:\/\//.test(fileRef)) return match
    try {
      const resolved = path.resolve(basedir, fileRef)
      if (!fs.existsSync(resolved)) return match
      let rel = path.relative(process.cwd(), resolved).split(path.sep).join('/')
      const encoded = encodeAssetPath(rel)
      if (/\.(mp4|webm|mov)$/i.test(resolved)) {
        return `<video controls src="/api/asset?path=${encoded}" alt="${alt}" style="max-width:100%"></video>`
      }
      return `![${alt || ''}](/api/asset?path=${encoded})`
    } catch (e) {
      return match
    }
  })

  // Rewrite standard markdown image/video links to serve through /api/asset
  transformed = transformed.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
    // skip absolute urls and already rewritten ones
    if (/^https?:\/\//.test(url) || url.startsWith('/api/asset') || url.startsWith('/')) return match
    try {
      const resolved = path.resolve(basedir, url)
      if (!fs.existsSync(resolved)) return match
      let rel = path.relative(process.cwd(), resolved).split(path.sep).join('/')
      const encoded = encodeAssetPath(rel)
      if (/\.(mp4|webm|mov)$/i.test(url)) {
        return `<video controls src="/api/asset?path=${encoded}" alt="${alt}" style="max-width:100%"></video>`
      }
      return `![${alt}](/api/asset?path=${encoded})`
    } catch (e) {
      return match
    }
  })

  const processed = await remark().use(html).process(transformed)
  let contentHtml = processed.toString()

  // Convert YouTube links in rendered HTML to embedded iframes
  contentHtml = contentHtml.replace(/<a href="(https:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))"[^>]*>[^<]*<\/a>/g, (match, url, videoId) => {
    return `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${videoId}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="max-width: 100%; margin: 2rem auto; display: block; border-radius: 0.75rem;"></iframe>`
  })

  return { contentHtml, data }
}

export async function getAllForDir(dir) {
  const full = path.resolve(process.cwd(), dir)
  if (!fs.existsSync(full)) return []
  const files = getMarkdownFilesRecursive(full)
  const out = []
  for (const f of files) {
    const rel = path.relative(process.cwd(), f).split(path.sep).join('/')
    const { contentHtml, data } = await renderMarkdown(f)
    out.push({ path: rel, html: contentHtml, meta: data })
  }
  return out
}

export function getFirstImageForDir(dir) {
  const full = path.resolve(process.cwd(), dir)
  if (!fs.existsSync(full)) return null
  const files = getFilesRecursive(full)
  const image = files.find((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f))
  if (!image) return null
  const rel = path.relative(process.cwd(), image).split(path.sep).join('/')
  return `/api/asset?path=${encodeAssetPath(rel)}`
}
