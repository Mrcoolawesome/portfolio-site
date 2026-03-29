import NavBar from '../components/NavBar'

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="px-8 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
            About / Contact
          </h1>
          <div className="project-card">
            <div className="flex items-center gap-8">
              <img
                src="/api/photo"
                alt="Photo of Devin"
                style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: '0.5rem' }}
              />
              <div>
                <h2 className="text-2xl font-bold mb-6">Devin Schutz</h2>
                <div className="flex flex-col gap-3">
                  <a
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 w-fit"
                    href="https://www.linkedin.com/in/devin-schutz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn →
                  </a>
                  <a
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 w-fit"
                    href="https://github.com/Mrcoolawesome"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                  <a
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 w-fit"
                    href="mailto:schutzdevin@gmail.com"
                  >
                    Email →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
