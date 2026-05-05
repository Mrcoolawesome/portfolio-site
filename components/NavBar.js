import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <div className="topbar">
        <div className="topbar-brand">
          <Link href="/">Devin Schutz</Link>
        </div>

        {/* Desktop nav */}
        <div className="topbar-links hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/gas">GAS Team</Link>
          <Link href="/oar">Oar We There Yet</Link>
          <Link href="/robotics">Robotics</Link>
          <Link href="/revo">Revo Technologies</Link>
          <Link href="/churchvolunteering">Church Volunteering</Link>
          <Link href="/about">Contact</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-auto flex flex-col gap-1 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10" style={{zIndex: 9999}}>
          <div className="flex flex-col px-8 py-4 gap-4">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/gas" onClick={() => setIsOpen(false)}>GAS Team</Link>
            <Link href="/oar" onClick={() => setIsOpen(false)}>Oar We There Yet</Link>
            <Link href="/robotics" onClick={() => setIsOpen(false)}>Robotics</Link>
            <Link href="/revo" onClick={() => setIsOpen(false)}>Revo Technologies</Link>
            <Link href="/churchvolunteering" onClick={() => setIsOpen(false)}>Church Volunteering</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </div>
  )
}
