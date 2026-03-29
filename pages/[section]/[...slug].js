import NavBar from '../../components/NavBar'
import { getAllForDir } from '../../lib/markdown'

const SECTION_MAP = {
  gas: 'GASTeamStuff/GasTeamStuff',
  oar: 'OarWeThereYetStuff/write-ups',
  robotics: 'RoboticsStuff/roboticsObsidian',
}

export default function DocPage({ html, meta }) {
  if (!html) {
    return (
      <div>
        <NavBar />
        <main className="p-8">
          <p>Not found</p>
        </main>
      </div>
    )
  }
  return (
    <div>
      <NavBar />
      <main className="p-8">
        <article className="card markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = []
  for (const [key, dir] of Object.entries(SECTION_MAP)) {
    const posts = await getAllForDir(dir)
    for (const p of posts) {
      const prefix = dir + '/'
      let rel = p.path
      if (rel.startsWith(prefix)) rel = rel.slice(prefix.length)
      const slug = rel.replace(/\.md$/i, '')
      const slugParts = slug.split('/')
      paths.push({ params: { section: key, slug: slugParts } })
    }
  }
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { section, slug } = params
  const base = SECTION_MAP[section]
  if (!base) return { notFound: true }
  const slugPath = Array.isArray(slug) ? slug.join('/') : slug
  const target = `${base}/${slugPath}.md`
  const posts = await getAllForDir(base)
  const match = posts.find((p) => p.path === target)
  if (!match) return { notFound: true }
  return { props: { html: match.html, meta: match.meta || {} } }
}
