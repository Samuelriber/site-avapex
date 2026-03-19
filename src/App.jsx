import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import SEO from './components/SEO.jsx'
import TrackingScripts from './components/TrackingScripts.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Fleet from './components/Fleet.jsx'
import MVV from './components/MVV.jsx'
import ClientsCarousel from './components/ClientsCarousel.jsx'
import FAQ from './components/FAQ.jsx'
import ContactForm from './components/ContactForm.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 600, offset: 50 })
  }, [])

  return (
    <>
      <SEO />
      <TrackingScripts />
      <FloatingButtons />
      <Header />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Fleet />
        <MVV />
        <ClientsCarousel />
        <FAQ />
        <ContactForm />
        <About />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
