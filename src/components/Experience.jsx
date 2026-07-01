import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    title: 'BTech in Computer Science & Technology',
    company: 'Trident Academy of Technology',
    period: '2023 - Present',
    location: 'Bhubaneswar, India',
    description: 'Pursuing Bachelor of Technology in CST with focus on Web Development, Data Structures, Algorithms, and Machine Learning.',
    tags: ['Java', 'Python', 'Web Dev', 'ML'],
    current: true,
  },
  {
    title: 'Web Development Projects',
    company: 'Self-Learning & Freelance',
    period: '2024 - Present',
    location: 'Remote',
    description: 'Built multiple responsive web applications including calculators, portfolios, and dashboards using React, HTML, CSS, and JavaScript.',
    tags: ['React', 'HTML/CSS', 'JavaScript', 'Tailwind'],
    current: true,
  },
  {
    title: 'Machine Learning Projects',
    company: 'Academic & Personal',
    period: '2024 - Present',
    location: 'Remote',
    description: 'Developed ML models including House Price Prediction using Python, scikit-learn, and Jupyter Notebook.',
    tags: ['Python', 'Scikit-learn', 'Jupyter', 'Pandas'],
    current: true,
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-[0.25em] uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mt-2">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Centered timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative mb-10 ml-14"
            >
              <div className="absolute -left-[2.75rem] top-5 w-3.5 h-3.5 rounded-full bg-indigo-500 border-4 border-[#0a0a1a] z-10">
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-30" />
                )}
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FiBriefcase className="text-indigo-400" size={14} />
                  <span className="text-sm text-indigo-400 font-medium">{exp.company}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{exp.title}</h3>
                <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><FiCalendar size={12} /> {exp.period}</span>
                  <span className="flex items-center gap-1"><FiMapPin size={12} /> {exp.location}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 text-xs font-medium rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
