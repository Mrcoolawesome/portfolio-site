import NavBar from '../components/NavBar'
import Link from 'next/link'
import Image from 'next/image'

export default function PersonalProjects() {
  const projects = [
    {
      title: 'The Pinbox',
      url: 'https://the-pinbox.com',
      image: 'https://images.pexels.com/photos/30530409/pexels-photo-30530409.jpeg',
      description: 'The Pinbox was an idea my friend Ally and I had come up with to try and make a reddit-like space for employees to vent their workplace frustrations anonymously. We thought there would be huge demand for this from both employers looking to improve their culture, and employees looking to vent their frustrations. What we found, however, was that nobody was really asking for this, and so we scrapped the idea. Ally worked on marketing and designing the logo while I worked on the website itself. I did all of the backend work myself, and had AI do the frontend work for me. I\'m quite proud of it, and I had fun learning how to make a reddit-clone.'
    },
    {
      title: 'HospiceFind',
      url: 'https://hospicefind.com',
      image: 'https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg',
      description: 'My mother works as a hospice marketer. She expressed to my friend Zane and I about how misinformed people are about hospice. So, Zane and I created HospiceFind.com. This project felt like it could have potential, since we talked to many different hospices about it and they said they\'d love for something like this to exist. Zane spend a lot of time designing the frontend himself, while I worked on making the backend work with the CMS/government API that provides data on all almost all hospices in the US. In the end what we made was a hospice finder and comparison tool, that was created to be as frictionless as possible for users, and inform them of the differences between hospices. In the end, we met with a few hospices but didn\'t feel like there was much demand for this product, despite a few workers saying they\'d like it. I\'m still quite proud of it, and it taught us a lot about web development.'
    }
  ]

  return (
    <div className="min-h-screen bg-black section-hero-root" style={{ '--section-bg-image': 'url("/background.jpg")' }}>
      <div className="section-hero-clear" aria-hidden="true" />
      <div className="section-hero-blur" aria-hidden="true" />
      <div className="section-hero-vignette" aria-hidden="true" />

      <div className="relative z-50">
        <NavBar />
      </div>

      <main className="px-4 md:px-8 py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
              Personal Website Projects
            </h1>
            <p className="text-white/60 text-base md:text-lg">
              Side projects and ventures built with friends
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                {project.image && (
                  <div className="relative h-60 rounded-lg mb-6 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-links">
                    Visit →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
