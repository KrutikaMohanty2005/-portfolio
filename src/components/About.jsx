import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '5+', label: 'Languages' },
  { value: '2+', label: 'Repos' },
  { value: 'BTech', label: 'CST' },
]

const photos = [
  { src: '/photo2.jpg', alt: 'Krutika Mohanty' },
  { src: '/photo3.jpg', alt: 'Krutika Mohanty' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const [currentPhoto, setCurrentPhoto] = useState(0)

  const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % photos.length)
  const prevPhoto = () => setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-[0.25em] uppercase">About</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Centered single column layout */}
        <div className="flex flex-col items-center">
          {/* Photo - centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <div className="relative w-64 h-72 rounded-3xl overflow-hidden group mx-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPhoto}
                  src={photos[currentPhoto].src}
                  alt={photos[currentPhoto].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <button onClick={prevPhoto} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all opacity-0 group-hover:opacity-100">
                <FiChevronLeft size={18} />
              </button>
              <button onClick={nextPhoto} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all opacity-0 group-hover:opacity-100">
                <FiChevronRight size={18} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPhoto(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentPhoto ? 'bg-white w-6' : 'bg-white/40 w-1.5 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content - centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center max-w-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              BTech CST Student & <span className="gradient-text">Developer</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              I'm Krutika Mohanty, a passionate Computer Science & Technology student at Trident Academy of Technology, Bhubaneswar.
              I enjoy building web apps and exploring machine learning with Java, Python, and modern frameworks.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
              <FiMapPin size={14} className="text-indigo-400" />
              <span>Bhubaneswar, India</span>
            </div>

            {/* Tags - centered */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['React', 'Java', 'Python', 'ML', 'Web Dev'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats - centered */}
            <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="text-center p-3 rounded-xl glass-card"
                >
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
