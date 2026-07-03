import { HelmetProvider, Helmet } from 'react-helmet-async'
import EqpHeader from './components/EqpHeader'
import EqpHero from './components/EqpHero'
import EqpOffers from './components/EqpOffers'
import EqpBenefits from './components/EqpBenefits'
import EqpChargeBar from './components/EqpChargeBar'
import EqpSectors from './components/EqpSectors'
import EqpForm from './components/EqpForm'
import EqpFooter from './components/EqpFooter'
import './styles/equip.css'

export default function LandingEmpilhadeirasLitio() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Locação de Empilhadeiras Elétricas a Lítio — Avapex Transportes</title>
        <meta
          name="description"
          content="Locação de empilhadeiras elétricas a lítio. Reduza custos operacionais, aumente a produtividade e a disponibilidade na sua operação logística, industrial ou de mineração."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="eqp-page">
        <EqpHeader />
        <main className="pt-20">
          <EqpHero />
          <EqpOffers />
          <EqpChargeBar />
          <EqpBenefits />
          <EqpSectors />
          <EqpForm />
        </main>
        <EqpFooter />
      </div>
    </HelmetProvider>
  )
}
