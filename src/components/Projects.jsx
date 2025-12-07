export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description:
        'A modern e-commerce web application built with a focus on clean UI, smooth user experience, and efficient product management. Features product browsing, category filtering, dynamic shopping cart, and secure checkout flow.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/project1.jpg',
      fallbackImage: 'Ecommerce.png',
      liveLink: '#',
      githubLink: 'https://github.com/Shekualhaji/skills-github-pages',
    },
    {
      id: 2,
      title: 'Blogging Website',
      description:
        'A sleek and modern blogging platform designed for easy content creation and an enjoyable reading experience. Features responsive layout, intuitive navigation, and clean editor for publishing posts.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/project2.jpg',
      fallbackImage: 'Blogging.png',
      liveLink: '',
      githubLink: 'https://github.com/Shekualhaji/skills-github-pages',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <h2
            id="projects-heading"
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-slate-800/50 border border-cyan-400/10 rounded-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = project.fallbackImage }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20 hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4 border-t border-cyan-400/10">
                  <a
                    href={project.liveLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-900 rounded-lg transition-all duration-300 font-semibold"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-900 rounded-lg transition-all duration-300 font-semibold"
                    aria-label={`View GitHub code for ${project.title}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center pt-8">
          <a
            href="https://github.com/Shekualhaji"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-cyan-400 hover:border-cyan-300 text-cyan-400 hover:text-cyan-300 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            aria-label="View more projects on GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
