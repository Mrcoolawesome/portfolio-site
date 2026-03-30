import NavBar from '../../components/NavBar'
import { getAllForDir } from '../../lib/markdown'
import { getHomePreviews } from '../../lib/homePreviews'

const SECTION_MAP = {
  gas: 'GASTeamStuff/GasTeamStuff',
  oar: 'OarWeThereYetStuff/write-ups',
  robotics: 'RoboticsStuff/roboticsObsidian',
  revo: 'RevoTechnologies/revoWriteups',
}

function getFirstImageFromHtml(contentHtml) {
  const m = (contentHtml || '').match(/<img[^>]*src=["']([^"']+)["']/i)
  return m ? m[1] : null
}

export default function DocPage({ html, meta, backgroundImage }) {
  return (
    <div
      className="min-h-screen bg-black section-hero-root"
      style={{ '--section-bg-image': `url("${backgroundImage || ''}")` }}
    >
      <div className="section-hero-clear" aria-hidden="true" />
      <div className="section-hero-blur" aria-hidden="true" />
      <div className="section-hero-vignette" aria-hidden="true" />

      <div className="relative z-10">
        <NavBar />
      </div>
      <main className="p-8 relative z-10">
        {!html && <p>Not found</p>}
        {html && (
          <article className="card markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
        )}
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
  const previews = getHomePreviews()
  const slugPath = Array.isArray(slug) ? slug.join('/') : slug
  const target = `${base}/${slugPath}.md`
  const posts = await getAllForDir(base)
  const match = posts.find((p) => p.path === target)
  if (!match) return { notFound: true }
  const firstDiscussionImage = getFirstImageFromHtml(match.html)
  return {
    props: {
      html: match.html,
      meta: match.meta || {},
      backgroundImage: firstDiscussionImage || previews[section] || null,
    },
  }
}
