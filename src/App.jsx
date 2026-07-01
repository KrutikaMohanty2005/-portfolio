import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import VideoSection from './components/VideoSection'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import VideoOverlay from './components/VideoOverlay'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? JSON.parse(saved) : true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-colors duration-500 relative ${darkMode ? 'bg-[#0a0a1a] text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Background Effects */}
      <div className="mesh-gradient" />
      <div className="grid-overlay" />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <VideoSection />
        <Testimonials />
        <Contact />
        <CTA />
        <Footer />
        <VideoOverlay />
      </div>
    </div>
  )
}

export default App
