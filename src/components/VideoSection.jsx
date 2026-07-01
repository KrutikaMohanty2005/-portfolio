import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiPlay, FiExternalLink } from 'react-icons/fi'

export default function VideoSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [playing, setPlaying] = useState(false)

  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-[0.25em] uppercase">Showcase</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mt-2">
            See It in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm">
            A quick walkthrough of my portfolio website
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl overflow-hidden group">
            <div className="relative aspect-video bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10">
              {!playing ? (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.button
                        onClick={() => setPlaying(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/40 mb-4 mx-auto group-hover:shadow-indigo-500/60 transition-shadow"
                      >
                        <FiPlay size={32} className="ml-1" />
                      </motion.button>
                      <p className="text-gray-400 text-sm">Click to play demo</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 via-transparent to-transparent" />
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#0a0a1a]">
                  <div className="text-center p-8">
                    <p className="text-gray-400 mb-4">Replace this with your video</p>
                    <p className="text-gray-500 text-sm max-w-md mx-auto">
                      Record your screen using the demo.html auto-scroll feature, 
                      upload to YouTube, and embed it here using an iframe.
                    </p>
                    <a
                      href="https://github.com/KrutikaMohanty2005/-portfolio/blob/main/demo.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-indigo-400 text-sm hover:text-indigo-300 transition-colors"
                    >
                      Open demo.html <FiExternalLink size={14} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              'React + Vite',
              'Tailwind CSS',
              'Framer Motion',
              'Glassmorphism UI',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-xs font-medium rounded-full glass text-gray-400 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
