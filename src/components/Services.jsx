import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayout, FiSmartphone, FiDatabase, FiTrendingUp, FiPenTool } from 'react-icons/fi'

const services = [
  {
    icon: <FiLayout />,
    title: 'Web Development',
    description: 'Building responsive, modern websites and web applications using React, HTML, CSS, and JavaScript with clean, maintainable code.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <FiCode />,
    title: 'Frontend Development',
    description: 'Creating engaging user interfaces with React.js, Tailwind CSS, and Framer Motion for smooth, interactive experiences.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: <FiSmartphone />,
    title: 'Responsive Design',
    description: 'Ensuring pixel-perfect, mobile-first designs that look stunning on every device and screen size.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FiDatabase />,
    title: 'Data Analysis',
    description: 'Processing and visualizing data using Python, Pandas, and Jupyter Notebook for actionable insights.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Machine Learning',
    description: 'Building predictive models and ML pipelines using scikit-learn and Python for real-world applications.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: <FiPenTool />,
    title: 'UI/UX Design',
    description: 'Designing intuitive, aesthetically pleasing interfaces with a focus on user experience and accessibility.',
    gradient: 'from-fuchsia-500 to-pink-500',
  },
]

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mt-3">
            What I <span className="gradient-text">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 group relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-80 flex items-center justify-center text-white text-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
