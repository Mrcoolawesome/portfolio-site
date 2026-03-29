import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="topbar">
      <div className="topbar-brand">
        <span>Devin Schutz</span>
      </div>
      <div className="topbar-links">
        <Link href="/">Home</Link>
        <Link href="/gas">GAS Team</Link>
        <Link href="/oar">Oar We There Yet</Link>
        <Link href="/robotics">Robotics</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="topbar-right">
        <Link href="/about" className="topbar-right text-white/70 hover:text-white transition-colors text-sm">
          More
        </Link>
      </div>
    </div>
  )
}
