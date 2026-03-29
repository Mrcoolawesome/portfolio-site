import NavBar from '../components/NavBar'

export default function About() {
  return (
    <div>
      <NavBar />
      <main className="p-8">
        <h1 className="text-2xl mb-4">About / Contact</h1>
        <div className="card flex items-center gap-6">
          <img src="/api/photo" alt="Photo of Devin" style={{ width: 120, height: 120, objectFit: 'cover' }} />
          <div>
            <p className="mb-2">Devin Schutz</p>
            <p><a className="btn-outline" href="https://www.linkedin.com/in/devin-schutz/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p className="mt-2"><a className="btn-outline" href="https://github.com/Mrcoolawesome" target="_blank" rel="noreferrer">GitHub</a></p>
            <p className="mt-2"><a className="btn-outline" href="mailto:schutzdevin@gmail.com">Email</a></p>
          </div>
        </div>
      </main>
    </div>
  )
}
