import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import { getHomePreviews } from '../lib/homePreviews'

export default function Home({ previews }) {
  return (
    <div className="min-h-screen" style={{ backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <NavBar />
      <main className="px-4 md:px-8 py-12 md:py-20">
        <div className="mb-12 md:mb-20 text-center pb-8 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
              Experiences
            </h1>
            <p className="text-white/60 text-base md:text-lg">
              Developer, entrepenure, gamer.
            </p>
        </div>

        <div className="project-grid">
            {/* GAS Team */}
            <div className="project-card">
              {previews.gas && (
                <div className="relative h-60 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src={previews.gas}
                    alt="GAS Team"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
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
                <div className="relative h-60 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src={previews.oar}
                    alt="Oar We There Yet"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
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
                <div className="relative h-60 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src={previews.robotics}
                    alt="High School Robotics"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <h2>High School Robotics</h2>
              <p>A bit about my high school robotics experiences. This is where my programming journey began.</p>
              <div className="project-links">
                <Link href="/robotics" className="project-links">
                  Open →
                </Link>
              </div>
            </div>

            {/* Revo Technologies */}
            <div className="project-card">
              {previews.revo && (
                <div className="relative h-60 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src={previews.revo}
                    alt="Revo Technologies"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <h2>Revo Technologies</h2>
              <p>My experience at Revo Technolgies and a bit about the skills I gained from my summer there.</p>
              <div className="project-links">
                <Link href="/revo" className="project-links">
                  Open →
                </Link>
              </div>
            </div>

            {/* Church Volunteering */}
            <div className="project-card">
              {previews.churchvolunteering && (
                <div className="relative h-60 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src={previews.churchvolunteering}
                    alt="Church Volunteering"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <h2>Church Volunteering</h2>
              <p>My experience volunteering at my church and the media production projects I worked on.</p>
              <div className="project-links">
                <Link href="/churchvolunteering" className="project-links">
                  Open →
                </Link>
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
