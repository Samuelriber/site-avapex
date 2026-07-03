import { lazy, Suspense, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import SEO from './components/SEO.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import ClientsCarousel from './components/ClientsCarousel.jsx'
import ContactForm from './components/ContactForm.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'

const Fleet        = lazy(() => import('./components/Fleet.jsx'))
const MVV          = lazy(() => import('./components/MVV.jsx'))
const PoliticaGestao = lazy(() => import('./components/PoliticaGestao.jsx'))
const GrupoSeday   = lazy(() => import('./components/GrupoSeday.jsx'))

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 600, offset: 50 })
    return () => AOS.refresh()
  }, [])

  // Rola até o anchor quando a home é carregada via /#section (ex: vindo da /obrigado)
  useEffect(() => {
    const { hash } = window.location
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <SEO />
      <Header />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <ClientsCarousel />
        <Suspense fallback={null}>
          <Fleet />
          <MVV />
          <PoliticaGestao />
        </Suspense>
        <ContactForm />
        <About />
        <Suspense fallback={null}>
          <GrupoSeday />
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
