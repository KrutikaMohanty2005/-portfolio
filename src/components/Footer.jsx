import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiArrowUp } from 'react-icons/fi'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#home" className="text-2xl font-bold font-['Space_Grotesk'] inline-block mb-4">
              <span className="gradient-text">&lt;</span>
              <span className="text-white">Krutika</span>
              <span className="gradient-text">/&gt;</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              BTech CST Student passionate about building amazing web applications and exploring the world of ML.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-indigo-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: <FiGithub size={18} />, href: 'https://github.com/KrutikaMohanty2005' },
                { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/krutika-mohanty-1319862a7' },
                { icon: <FiTwitter size={18} />, href: '#' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl glass text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">
              krutika.mohanty@email.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <FiHeart className="text-red-400 fill-red-400" /> by Krutika Mohanty
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-xl glass text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
