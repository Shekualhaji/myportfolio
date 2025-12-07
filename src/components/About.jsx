export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Java', 'Node.js', 'MongoDB'] },
    { category: 'Design', items: ['Figma', 'Adobe Creative Suite', 'UI/UX', 'Responsive Design'] },
  ]

  const highlights = [
    {
      title: 'Clean Code',
      description: 'Well-organized, maintainable, and semantic code',
      icon: '💻'
    },
    {
      title: 'Modern Design',
      description: 'Contemporary aesthetics with focus on user experience',
      icon: '🎨'
    },
    {
      title: 'High Performance',
      description: 'Fast-loading, optimized applications for all devices',
      icon: '⚡'
    },
  ]

  return (
    <section
      id="about"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 rounded-full"></div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I&apos;m a passionate Front-End Developer who specializes in building clean,
              responsive, and user-friendly web interfaces. With a strong focus on modern
              JavaScript, React, and intuitive UI/UX design, I enjoy transforming ideas into
              seamless digital experiences.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I love solving problems, optimizing performance, and creating products that feel
              as good as they look. Always learning, always improving, and constantly pushing
              the boundaries of what&apos;s possible on the web.
            </p>

            {/* Skills Categories */}
            <div className="space-y-6 pt-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="text-cyan-400 font-semibold mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 rounded-full text-sm hover:bg-cyan-500/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image & Highlights */}
          <div className="space-y-8">
            {/* Placeholder Image */}
            <div className="relative group">
              {/*
                Profile image:
                - To use your own photo, place it at `public/profile.jpg` (root of project).
                - The component will load `/profile.jpg` and fall back to the Unsplash placeholder if missing.
              */}
              <div className="absolute inset-0 bg-cyan-400/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div
                className="relative w-80 h-80 mx-auto bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center"
              >
                <img
                  src="/Alhaji.jpg"
                  alt="Profile"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=60' }}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="p-4 bg-slate-900 border border-cyan-400/20 rounded-lg hover:border-cyan-400/50 transition-colors duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl flex-shrink-0">{highlight.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-slate-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
