export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-900"
      aria-labelledby="hero-heading"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Greeting Badge */}
        <div className="inline-block">
          <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 sm:space-y-6">
          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white"
          >
            Hi, I&apos;m{' '}
            <span className="text-cyan-400">
              Alhaji Sheku
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl text-cyan-400 font-semibold">
            Frontend Developer & UI Enthusiast
          </p>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I craft beautiful, responsive web experiences with React and modern
            JavaScript. Passionate about clean code, intuitive design, and
            solving complex problems.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
            aria-label="View my work"
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 bg-transparent border-2 border-cyan-400 hover:border-cyan-300 text-cyan-400 hover:text-cyan-300 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            aria-label="Contact me"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce hover:text-cyan-300 transition-colors"
        aria-label="Scroll to next section"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  )
}
