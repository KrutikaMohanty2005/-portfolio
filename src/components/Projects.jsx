import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'House Price Prediction',
    description: 'ML model that predicts house prices using regression algorithms. Achieved high accuracy with feature engineering and data visualization using Python, scikit-learn, and Jupyter Notebook.',
    tags: ['Python', 'ML', 'Jupyter', 'Regression', 'Pandas'],
    github: 'https://github.com/KrutikaMohanty2005/HOUSE_PRICE_PREDICTION',
    emoji: '🏠',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'ML/AI',
  },
  {
    title: 'Purple Neon Calculator',
    description: 'Responsive calculator with modern purple neon UI, smooth animations, keyboard support, and clean arithmetic operations. Fully responsive across all devices.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Responsive'],
    github: 'https://github.com/KrutikaMohanty2005/Purple-Neon-Calculator',
    emoji: '🔢',
    gradient: 'from-purple-500 to-pink-500',
    category: 'Web Dev',
  },
  {
    title: 'Portfolio Website',
    description: 'Premium animated portfolio with React, Tailwind CSS, Framer Motion, glassmorphism UI, and particle backgrounds. Built with modern web technologies.',
    tags: ['React', 'Tailwind', 'Framer Motion', 'Responsive', 'Vite'],
    github: 'https://github.com/KrutikaMohanty2005/-portfolio',
    emoji: '💻',
    gradient: 'from-indigo-500 to-purple-500',
    category: 'Web Dev',
  },
  {
    title: 'Medical Insurance Cost Prediction',
    description: 'ML project predicting insurance costs using 22 features with 5 models including Neural Networks. Achieved 89.47% R² Score with Random Forest. Features Flask & Streamlit web apps with user authentication.',
    tags: ['Python', 'Scikit-learn', 'Flask', 'Streamlit', 'Neural Networks', 'Pandas'],
    github: 'https://github.com/KrutikaMohanty2005/Medical-Insurance-Cost-Prediction',
    emoji: '🏥',
    gradient: 'from-emerald-500 to-teal-500',
    category: 'ML/AI',
  },
]

const filters = ['All', 'Web Dev', 'ML/AI']

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-[0.25em] uppercase">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mt-2">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        {/* Filters - centered */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects grid - centered */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden group"
              >
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-10 flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/70 via-transparent to-transparent" />
                  <span className="text-5xl relative z-10 group-hover:scale-125 transition-transform duration-500">{project.emoji}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <FiGithub size={14} /> View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
