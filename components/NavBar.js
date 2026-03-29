import Link from 'next/link'
import Button from './ui/Button'

export default function NavBar() {
  return (
    <div className="topbar">
      <div className="flex items-center gap-6">
        <div className="text-lg font-bold">Devin Schutz</div>
        <Link href="/"><Button>Home</Button></Link>
        <Link href="/gas"><Button>GAS Team</Button></Link>
        <Link href="/oar"><Button>Oar We There Yet</Button></Link>
        <Link href="/robotics"><Button>Robotics</Button></Link>
      </div>
      <div>
        <Link href="/about"><Button>About</Button></Link>
      </div>
    </div>
  )
}
