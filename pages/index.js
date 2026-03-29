import Link from 'next/link'
import NavBar from '../components/NavBar'
import { getFirstImageForDir } from '../lib/markdown'

export default function Home({ previews }) {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="px-8 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="mb-20 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              Things I've been building
            </h1>
            <p className="text-white/60 text-lg">
              A collection of things I've built, experiments I've run, and problems I've enjoyed solving.
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
  const oarPlayerGif = `/api/asset?path=${encodeURIComponent('OarWeThereYetStuff/write-ups/gaming/player-head.gif')}`
  return {
    props: {
      previews: {
        gas: getFirstImageForDir('GASTeamStuff'),
        oar: oarPlayerGif,
        robotics: getFirstImageForDir('RoboticsStuff'),
      },
    },
  }
}
