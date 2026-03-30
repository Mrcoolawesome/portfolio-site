import Link from 'next/link'
import NavBar from '../components/NavBar'
import { getHomePreviews } from '../lib/homePreviews'

export default function Home({ previews }) {
  return (
    <div className="min-h-screen bg-black home-hero-root">
      <NavBar />
      <main className="home-hero-main px-8 py-20">
        <div className="home-hero-clear" aria-hidden="true" />
        <div className="home-hero-blur" aria-hidden="true" />
        <div className="home-hero-vignette" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto">

          <div className="mb-20 text-center pb-8">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
              Experiences
            </h1>
            <p className="text-white/60 text-lg">
              Developer, entrepenure, gamer.
            </p>
          </div>

          <div className="project-grid">
            {/* GAS Team */}
            <div className="project-card">
              {previews.gas && (
                <img
                  src={previews.gas}
                  alt="GAS Team"
                  className="project-image"
                />
              )}
              <h2>GAS Team History</h2>
              <p>Writeups and media for the GAS team. Explore the journey, achievements, and technical insights from our team's work.</p>
              <div className="project-links">
                <Link href="/gas" className="project-links">
                  Open →
                </Link>
              </div>
            </div>

            {/* Oar We There Yet */}
            <div className="project-card">
              {previews.oar && (
                <img
                  src={previews.oar}
                  alt="Oar We There Yet"
                  className="project-image"
                />
              )}
              <h2>Oar We There Yet</h2>
              <p>Design notes, images, and gifs for a creative video game project. Featuring game mechanics, visual design, and development insights.</p>
              <div className="project-links">
                <Link href="/oar" className="project-links">
                  Open →
                </Link>
              </div>
            </div>

            {/* Robotics */}
            <div className="project-card">
              {previews.robotics && (
                <img
                  src={previews.robotics}
                  alt="High School Robotics"
                  className="project-image"
                />
              )}
              <h2>High School Robotics</h2>
              <p>Robotics writeups and media from competitive robotics. Technical documentation, competition highlights, and engineering solutions.</p>
              <div className="project-links">
                <Link href="/robotics" className="project-links">
                  Open →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const previews = getHomePreviews()
  return {
    props: {
      previews,
    },
  }
}
