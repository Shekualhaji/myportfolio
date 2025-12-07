import { useState, useEffect } from 'react'

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t border-cyan-400/10 bg-slate-900/80 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-cyan-400">
              Alhaji Sheku
            </h3>
            <p className="text-slate-400 text-sm">
              Frontend Developer & UI Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <nav className="space-y-2" aria-label="Footer navigation">
              <a
                href="#about"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-3">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Shekualhaji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/Alhaji10893298"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href="mailto:alhajisheku234@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                aria-label="Email"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/10"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm text-center sm:text-left">
            &copy; {year} Alhaji Sheku. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
