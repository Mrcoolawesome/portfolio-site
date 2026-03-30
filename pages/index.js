import Link from 'next/link'
import NavBar from '../components/NavBar'
import { getHomePreviews } from '../lib/homePreviews'

export default function Home({ previews }) {
  return (
    <div className="min-h-screen bg-black home-hero-root">
      <div className="home-hero-clear" aria-hidden="true" />
      <div className="home-hero-blur" aria-hidden="true" />
      <div className="home-hero-vignette" aria-hidden="true" />

      <div className="relative z-10">
        <NavBar />
      </div>
      <main className="px-8 py-20 relative z-10">
        <div className="relative z-10 max-w-7xl mx-auto">

          <div className="mb-20 text-center pb-8">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
              About Me
            </h1>
            <p className="text-white/60 text-lg">
              I'm a developer expierenced in web development & embedded programming, as well has a game developer & entrepreneur.
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
              <h2>USU GAS CubeSat Team</h2>
              <p>A bit about what I did and learned through the GAS team</p>
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
              <p>Design notes, images, and gifs for the game 'Oar We There Yet' that my co-founder and I are currently developing.</p>
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
              <p>A bit about my high school robotics expierences. This is where my programming journey began.</p>
              <div className="project-links">
                <Link href="/robotics" className="project-links">
                  Open →
                </Link>
              </div>
            </div>

            {/* Revo Technologies */}
            <div className="project-card">
              {previews.revo && (
                <img
                  src={previews.revo}
                  alt="Revo Technologies"
                  className="project-image"
                />
              )}
              <h2>Revo Technologies</h2>
              <p>A writeup and media from my experience working at Revo Technologies.</p>
              <div className="project-links">
                <Link href="/revo" className="project-links">
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
