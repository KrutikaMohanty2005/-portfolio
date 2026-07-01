import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiVideo, FiX } from 'react-icons/fi'

const overlays = [
  { text: 'Full-Stack Developer Portfolio', section: 'home', position: 'top-left' },
  { text: 'BTech CST Student', section: 'about', position: 'top-right' },
  { text: 'React • Java • Python • ML', section: 'skills', position: 'top-left' },
  { text: 'House Price Prediction ML', section: 'projects', position: 'top-right' },
  { text: 'Open to Internships', section: 'contact', position: 'bottom-center' },
  { text: 'Built with React + Vite + Tailwind', section: 'footer', position: 'bottom-left' },
]

export default function VideoOverlay() {
  const [active, setActive] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    if (!active) return
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'testimonials', 'contact', 'footer']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2) {
          setCurrentSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [active])

  if (!active) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setActive(true)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow"
        title="Enable video overlay mode"
      >
        <FiVideo size={20} />
      </motion.button>
    )
  }

  const currentOverlay = overlays.find(o => o.section === currentSection)

  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setActive(false)}
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-red-500/80 text-white backdrop-blur-sm"
        title="Disable video overlay"
      >
        <FiX size={16} />
      </motion.button>

      <AnimatePresence mode="wait">
        {currentOverlay && (
          <motion.div
            key={currentOverlay.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`fixed z-50 pointer-events-none ${
              currentOverlay.position === 'top-left' ? 'top-6 left-6' :
              currentOverlay.position === 'top-right' ? 'top-6 right-16' :
              currentOverlay.position === 'bottom-center' ? 'bottom-6 left-1/2 -translate-x-1/2' :
              'bottom-6 left-6'
            }`}
          >
            <div className="px-5 py-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white text-sm font-semibold tracking-wide shadow-lg">
              {currentOverlay.text}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/80 text-white text-xs font-medium"
        >
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          REC
        </motion.div>
      </div>
    </>
  )
}
