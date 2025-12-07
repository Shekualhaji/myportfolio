import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Read Formspree ID from Vite environment variable: VITE_FORMSPREE_ID
    // Accept either the raw ID (e.g. "xldqwrad") or a full URL (e.g. "https://formspree.io/f/xldqwrad").
    const rawFormspree = import.meta.env.VITE_FORMSPREE_ID || ''
    const FORMSPREE_ID = rawFormspree.includes('/') ? rawFormspree.split('/').pop() : rawFormspree

    try {
      if (FORMSPREE_ID) {
        // Submit via Formspree (recommended). Set VITE_FORMSPREE_ID in your .env
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _replyto: formData.email,
          }),
        })

        if (response.ok) {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', message: '' })
          setTimeout(() => setSubmitStatus(null), 5000)
        } else {
          setSubmitStatus('error')
          setTimeout(() => setSubmitStatus(null), 5000)
        }
      } else {
        // Fallback: open user's mail client with a prefilled message
        const to = 'alhajisheku234@gmail.com'
        const subject = `Portfolio contact from ${formData.name || 'Visitor'}`
        const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`
        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        // Assume success for UI purposes (can't detect actual mail send)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:alhajisheku234@gmail.com',
      label: 'Send me an email',
      icon: '📧'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Shekualhaji',
      label: 'Visit my GitHub profile',
      icon: '🐙'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/Alhaji10893298',
      label: 'Connect on Twitter',
      icon: '𝕏'
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to say hello, feel free to reach
            out. I&apos;m always interested in hearing about new opportunities.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-slate-900/50 border border-cyan-400/20 rounded-xl p-8"
              noValidate
            >
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                  ✗ Something went wrong. Please try again.
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Your name"
                  aria-label="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="your@email.com"
                  aria-label="Your email"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Your message..."
                  aria-label="Your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                aria-label="Send message"
              >
                {isLoading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Note about Formspree */}
              <p className="text-xs text-slate-400 text-center">
                Powered by Formspree. Your data is secure and will only be used to contact you.
              </p>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">Contact Info</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <a
                    href="mailto:alhajisheku234@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors break-all"
                    aria-label="Send email"
                  >
                    alhajisheku234@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <p className="text-white">Available worldwide</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 mb-1">Response Time</p>
                  <p className="text-white">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <h3 className="text-sm text-slate-400 font-semibold mb-3">Connect With Me</h3>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-3 bg-slate-900/50 border border-cyan-400/20 rounded-lg hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="text-white text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
