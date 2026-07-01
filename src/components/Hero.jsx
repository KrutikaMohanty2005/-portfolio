import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'

const roles = [
  'Full-Stack Developer',
  'ML Enthusiast',
  'Java Developer',
  'Python Developer',
  'Web Developer',
]

function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let isVisible = true

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0 }
    )
    observer.observe(canvas)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.4
        this.speedY = (Math.random() - 0.5) * 0.4
        this.opacity = Math.random() * 0.6 + 0.1
        this.color = Math.random() > 0.5 ? '99, 102, 241' : '139, 92, 246'
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset()
        }
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
        ctx.fill()
      }
    }

    const count = prefersReducedMotion ? 0 : window.innerWidth < 768 ? 40 : 70
    for (let i = 0; i < count; i++) {
      particles.push(new Particle())
    }

    const connectionDist = 140
    const connectionDistSq = connectionDist * connectionDist

    const animate = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(animate)
        return
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distSq = dx * dx + dy * dy
          if (distSq < connectionDistSq) {
            const dist = Math.sqrt(distSq)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - dist / connectionDist)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

function TypingAnimation() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = isDeleting ? 40 : 80

    if (!isDeleting && displayText === role) {
      const timer = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timer)
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      return
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? role.substring(0, displayText.length - 1)
          : role.substring(0, displayText.length + 1)
      )
    }, timeout)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRole])

  return (
    <span className="text-indigo-400">
      {displayText}
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  )
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Background Mesh Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-1.5s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-2.5 rounded-full glass text-sm font-medium text-indigo-400 mb-8 border border-indigo-500/20">
            Welcome to my digital universe
          </span>
          <span className="inline-block ml-3 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20 animate-pulse">
            Open to Internships
          </span>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', bounce: 0.4 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-[#0a0a1a]" />
              </div>
              {/* Avatar */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center overflow-hidden">
                  {!imgError ? (
                  <img
                  src="/photo2.jpg"
                  alt="Krutika Mohanty"
                  className="w-full h-full object-cover rounded-full"
                  onError={() => setImgError(true)}
                />
                ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                  👩‍💻
                </div>
                )}
              </div>
              {/* Floating status dot */}
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 rounded-full border-4 border-[#0a0a1a] z-10">
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base text-gray-500 uppercase tracking-[0.3em] font-medium mb-4"
        >
          Hey there, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-['Space_Grotesk'] leading-tight mb-4"
        >
          <span className="gradient-text">Krutika Mohanty</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 h-10"
        >
          I'm a <TypingAnimation />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-gray-500 max-w-xl mx-auto mb-12 text-sm md:text-base"
        >
          BTech CST Student at Trident Academy of Technology | Building clean, modern web experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99, 102, 241, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-base px-10 py-4 rounded-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <FiArrowDown className="animate-bounce" />
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-2xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:border-indigo-500/50"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: <FiGithub size={20} />, href: 'https://github.com/KrutikaMohanty2005', label: 'GitHub' },
            { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/krutika-mohanty-1319862a7', label: 'LinkedIn' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="p-3.5 rounded-2xl glass text-gray-400 hover:text-indigo-400 transition-all duration-300 border border-white/5 hover:border-indigo-500/30"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/15 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 rounded-full bg-indigo-400"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
