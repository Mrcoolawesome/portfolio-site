import NavBar from '../components/NavBar'
import Link from 'next/link'
import { getAllForDir } from '../lib/markdown'

function getTitleFromHtml(contentHtml, fallback) {
  const m = (contentHtml || '').match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  if (!m) return fallback
  return m[1].replace(/<[^>]+>/g, '').trim() || fallback
}

export default function Gas({ posts }) {
  return (
    <div>
      <NavBar />
      <main className="p-8">
        <h1 className="text-2xl mb-4">GAS Team History</h1>
        {posts.length === 0 && <p>No markdown found in GASTeamStuff/GasTeamStuff</p>}
        <div className="grid gap-4">
          {posts.map((p) => (
            <div key={p.slug} className="card">
              <h3 className="text-lg">{p.title}</h3>
              {p.excerpt && <p className="mt-2">{p.excerpt}</p>}
              <Link href={`/gas/${p.slug}`} className="btn-outline mt-4 inline-block">Open</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const dir = 'GASTeamStuff/GasTeamStuff'
  const postsRaw = await getAllForDir(dir)
  const posts = postsRaw.map((p) => {
    const prefix = dir + '/'
    let rel = p.path
    if (rel.startsWith(prefix)) rel = rel.slice(prefix.length)
    const slug = rel.replace(/\.md$/i, '')
    const fileName = rel.replace(/\.md$/i, '').split('/').pop()
    const title = p.meta && p.meta.title
      ? p.meta.title
      : getTitleFromHtml(p.html, fileName)
    // simple excerpt: first 120 chars of text (strip tags)
    const excerpt = (p.html || '').replace(/<[^>]+>/g, '').slice(0, 140)
    return { slug, title, excerpt }
  })
  return { props: { posts } }
}
