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
        <Link href="/revo">Revo Technologies</Link>
        <Link href="/churchvolunteering">Church Volunteering</Link>
        <Link href="/about">Contact</Link>
      </div>
    </div>
  )
}
