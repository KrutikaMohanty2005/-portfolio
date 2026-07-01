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
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-[0.25em] uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mt-2">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass-card rounded-3xl p-7"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-center gap-3">
                <span className="text-xl">{category.icon}</span>
                <span>{category.title}</span>
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + catIdx * 0.15 + skillIdx * 0.1, ease: [0.4, 0, 0.2, 1] }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
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
