import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ once: true, duration: 600, offset: 50 })
    // Initialize Lucide icons (CDN UMD loaded in index.html)
    if (window.lucide) window.lucide.createIcons()
  }, [])

  return (
    <>
      <Header />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
