import { HelmetProvider, Helmet } from 'react-helmet-async'
import CopaBackground from './components/CopaBackground'
import CopaHeader from './components/CopaHeader'
import CopaRoster from './components/CopaRoster'
import CopaFeatures from './components/CopaFeatures'
import CopaCTA from './components/CopaCTA'
import CopaForm from './components/CopaForm'
import CopaFooter from './components/CopaFooter'
import './styles/copa.css'

export default function LandingEspecialCopa() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Avapex Transportes — Especial Copa</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="copa-root">
        {/* fundo fixo com imagem + overlay escuro */}
        <CopaBackground />

        {/* cabeçalho fixo */}
        <CopaHeader />

        {/* conteúdo principal — pt-20 compensa o header fixo (≈80px) */}
        <main className="pt-20 w-full max-w-7xl mx-auto">
          <CopaRoster />
          <CopaFeatures />
          <CopaCTA />
        </main>

        <CopaForm />

        <CopaFooter />
      </div>
    </HelmetProvider>
  )
}
