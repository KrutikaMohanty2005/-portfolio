import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Java', level: 85, color: 'from-orange-500 to-red-500' },
      { name: 'Python', level: 80, color: 'from-blue-500 to-yellow-500' },
      { name: 'JavaScript', level: 75, color: 'from-yellow-400 to-yellow-600' },
      { name: 'HTML/CSS', level: 90, color: 'from-orange-400 to-pink-500' },
      { name: 'SQL', level: 70, color: 'from-blue-400 to-cyan-500' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚛️',
    skills: [
      { name: 'React.js', level: 78, color: 'from-cyan-400 to-blue-500' },
      { name: 'Node.js', level: 65, color: 'from-green-400 to-green-600' },
      { name: 'Tailwind CSS', level: 82, color: 'from-teal-400 to-cyan-500' },
      { name: 'Express.js', level: 60, color: 'from-gray-400 to-gray-600' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 80, color: 'from-purple-400 to-purple-600' },
      { name: 'VS Code', level: 88, color: 'from-blue-400 to-blue-600' },
      { name: 'Jupyter Notebook', level: 75, color: 'from-orange-400 to-red-400' },
      { name: 'MongoDB', level: 55, color: 'from-green-400 to-green-600' },
    ],
  },
  {
    title: 'Domains',
    icon: '🎯',
    skills: [
      { name: 'Web Development', level: 82, color: 'from-indigo-400 to-purple-500' },
      { name: 'Machine Learning', level: 65, color: 'from-pink-400 to-rose-500' },
      { name: 'Data Structures', level: 72, color: 'from-amber-400 to-orange-500' },
      { name: 'UI/UX Design', level: 60, color: 'from-fuchsia-400 to-pink-500' },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section-padding relative">
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
            Skills
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] mt-3">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass-card rounded-3xl p-8 group relative overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <span>{category.title}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                      <span className="text-sm text-indigo-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + catIdx * 0.15 + skillIdx * 0.1, ease: [0.4, 0, 0.2, 1] }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
