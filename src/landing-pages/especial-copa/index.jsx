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
        <script>{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1708563177041396');
          fbq('track', 'PageView');
        `}</script>
        <noscript>{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1708563177041396&ev=PageView&noscript=1" />`}</noscript>
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
