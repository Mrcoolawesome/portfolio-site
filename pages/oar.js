import NavBar from '../components/NavBar'
import Link from 'next/link'
import { getAllForDir } from '../lib/markdown'

function getTitleFromHtml(contentHtml, fallback) {
  const m = (contentHtml || '').match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  if (!m) return fallback
  return m[1].replace(/<[^>]+>/g, '').trim() || fallback
}

export default function Oar({ posts }) {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="px-8 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
            Oar We There Yet — Game
          </h1>
          {posts.length === 0 && <p className="text-white/60">No markdown found in OarWeThereYetStuff/write-ups</p>}
          <div className="project-grid">
            {posts.map((p) => (
              <div key={p.slug} className="project-card">
                <h2>{p.title}</h2>
                {p.excerpt && <p>{p.excerpt}</p>}
                <div className="project-links">
                  <Link href={`/oar/${p.slug}`} className="project-links">
                    Open →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const dir = 'OarWeThereYetStuff/write-ups'
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
    const excerpt = (p.html || '').replace(/<[^>]+>/g, '').slice(0, 140)
    return { slug, title, excerpt }
  })
  return { props: { posts } }
}
