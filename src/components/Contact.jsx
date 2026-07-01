import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'krutika.mohanty@email.com', href: 'mailto:krutika.mohanty@email.com' },
    { icon: <FiMapPin />, label: 'Location', value: 'Bhubaneswar, India', href: '#' },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/krutika-mohanty-1319862a7' },
    { icon: <FiGithub />, label: 'GitHub', value: 'View GitHub Profile', href: 'https://github.com/KrutikaMohanty2005' },
  ]

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-[0.25em] uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mt-2">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact info - centered row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {contactInfo.map((info, i) => (
            <a
              key={i}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 glass-card rounded-xl px-5 py-3 group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500">{info.label}</p>
                <p className="text-sm text-white font-medium">{info.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form - centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-sm resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary py-3.5 text-sm flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                {submitted ? 'Sent Successfully!' : <>Send Message <FiSend size={16} /></>}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
