import Link from 'next/link'
import NavBar from '../components/NavBar'
import { getFirstImageForDir } from '../lib/markdown'

export default function Home({ previews }) {
  return (
    <div>
      <NavBar />
      <main className="p-8">
        <h1 className="text-3xl mb-6">Portfolio Overview</h1>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="card">
            {previews.gas && (
              <img
                src={previews.gas}
                alt="GAS preview"
                className="w-full h-40 object-cover rounded border border-white/20 mb-4"
              />
            )}
            <h2 className="text-xl">GAS Team History</h2>
            <p className="mt-2">Writeups and media for the GAS team.</p>
            <Link href="/gas" className="btn-outline mt-4 inline-block">Open</Link>
          </div>

          <div className="card">
            {previews.oar && (
              <img
                src={previews.oar}
                alt="Oar preview"
                className="w-full h-40 object-cover rounded border border-white/20 mb-4"
              />
            )}
            <h2 className="text-xl">Oar We There Yet (Video Game)</h2>
            <p className="mt-2">Design notes, images, and gifs for the game.</p>
            <Link href="/oar" className="btn-outline mt-4 inline-block">Open</Link>
          </div>

          <div className="card">
            {previews.robotics && (
              <img
                src={previews.robotics}
                alt="Robotics preview"
                className="w-full h-40 object-cover rounded border border-white/20 mb-4"
              />
            )}
            <h2 className="text-xl">High School Robotics</h2>
            <p className="mt-2">Robotics writeups and media.</p>
            <Link href="/robotics" className="btn-outline mt-4 inline-block">Open</Link>
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
