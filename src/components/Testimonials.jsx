import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight, FiStar, FiMessageCircle } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Prof. Faculty Guide',
    role: 'Computer Science Department',
    text: 'Krutika is a dedicated student with a strong passion for technology. Her projects demonstrate creativity and a solid understanding of programming concepts.',
    rating: 5,
    emoji: '👨‍🏫',
  },
  {
    name: 'Project Collaborator',
    role: 'Fellow Developer',
    text: 'Working with Krutika on ML projects was great. She brings fresh perspectives and writes clean, well-documented code. Highly recommend for any tech team.',
    rating: 5,
    emoji: '👩‍💻',
  },
  {
    name: 'Hackathon Team',
    role: 'Team Member',
    text: 'Krutika is a quick learner who picks up new technologies fast. Her enthusiasm for coding and problem-solving makes her an invaluable team member.',
    rating: 5,
    emoji: '🧑‍🤝‍🧑',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mt-3">
            What People <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <FiMessageCircle className="absolute top-6 left-6 text-indigo-500/20" size={60} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-5xl mb-6">{testimonials[current].emoji}</div>
                <p className="text-lg text-gray-300 leading-relaxed mb-8 relative z-10 italic">
                  "{testimonials[current].text}"
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <h4 className="text-white font-bold text-lg">{testimonials[current].name}</h4>
                <p className="text-indigo-400 text-sm">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-3 rounded-xl glass text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <FiChevronLeft size={20} />
            </motion.button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-indigo-400 w-8' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-3 rounded-xl glass text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
