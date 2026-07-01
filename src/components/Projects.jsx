import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'

const projects = [
  {
    title: 'House Price Prediction',
    description: 'Machine learning model that predicts house prices using regression algorithms. Built with Python, scikit-learn, and Jupyter Notebook for data analysis and visualization.',
    tags: ['Python', 'ML', 'Jupyter', 'Regression'],
    github: 'https://github.com/KrutikaMohanty2005/HOUSE_PRICE_PREDICTION',
    emoji: '🏠',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'ML/AI',
  },
  {
    title: 'Purple Neon Calculator',
    description: 'Responsive calculator web application featuring a modern purple neon UI with smooth animations and basic arithmetic operations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    github: 'https://github.com/KrutikaMohanty2005/Purple-Neon-Calculator',
    emoji: '🔢',
    gradient: 'from-purple-500 to-pink-500',
    category: 'Web Dev',
  },
  {
    title: 'Portfolio Website',
    description: 'A premium animated portfolio website built with React.js, Tailwind CSS, and Framer Motion featuring glassmorphism UI and particle backgrounds.',
    tags: ['React', 'Tailwind', 'Framer Motion', 'Responsive'],
    github: 'https://github.com/KrutikaMohanty2005',
    emoji: '💻',
    gradient: 'from-indigo-500 to-purple-500',
    category: 'Web Dev',
  },
]

const filters = ['All', 'Web Dev', 'ML/AI', 'Python']

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block text-indigo-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4 px-5 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5"
          >
            Projects
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mt-3">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card rounded-3xl overflow-hidden group relative"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                {/* Project header */}
                <div className={`h-52 bg-gradient-to-br ${project.gradient} opacity-10 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 via-transparent to-transparent" />
                  <span className="text-7xl relative z-10 group-hover:scale-125 transition-transform duration-700 ease-out drop-shadow-lg">{project.emoji}</span>

                  {/* Floating particles */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white/20 rounded-full animate-float" />
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-white/10 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
                  <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-white/15 rounded-full animate-float" style={{ animationDelay: '-4s' }} />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors font-['Space_Grotesk']">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 text-xs font-medium rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                    >
                      <FiGithub size={16} /> Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
