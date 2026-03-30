import NavBar from '../components/NavBar'

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
            About / Contact
          </h1>
          <div className="project-card about-card">
            <div className="about-layout">
              <img
                src="/api/photo"
                alt="Photo of Devin"
                className="about-photo"
              />
              <div>
                <h2 className="text-3xl font-bold mb-8">Devin Schutz</h2>
                <div className="about-links">
                  <a
                    className="about-link"
                    href="https://www.linkedin.com/in/devin-schutz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn →
                  </a>
                  <a
                    className="about-link"
                    href="https://github.com/Mrcoolawesome"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                  <a
                    className="about-link"
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
