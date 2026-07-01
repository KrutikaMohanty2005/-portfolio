import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span> Together
          </h2>
          <p className="text-gray-400 text-lg mb-4 max-w-2xl mx-auto">
            Portfolio built with React, Tailwind CSS & Framer Motion
          </p>
          <p className="text-green-400 text-sm font-semibold mb-8 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to internships and software developer opportunities
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-base px-10 py-4 rounded-2xl"
            >
              <span className="relative z-10">Get In Touch</span>
            </motion.a>
            <motion.a
              href="https://github.com/KrutikaMohanty2005"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-2xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:border-indigo-500/50 flex items-center gap-2"
            >
              <FiGithub size={18} /> View GitHub
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-5 mb-10">
            {[
              { icon: <FiGithub size={20} />, href: 'https://github.com/KrutikaMohanty2005', label: 'GitHub' },
              { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/krutika-mohanty-1319862a7', label: 'LinkedIn' },
              { icon: <FiMail size={20} />, href: 'mailto:krutika.mohanty@email.com', label: 'Email' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3.5 rounded-2xl glass text-gray-400 hover:text-indigo-400 transition-all duration-300 border border-white/5 hover:border-indigo-500/30"
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-xl glass text-gray-500 hover:text-indigo-400 transition-colors mx-auto"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
