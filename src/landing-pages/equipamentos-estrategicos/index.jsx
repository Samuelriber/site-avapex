import { HelmetProvider, Helmet } from 'react-helmet-async'
import EstrHeader from './components/EstrHeader'
import EstrHero from './components/EstrHero'
import EstrDieselAdvantages from './components/EstrDieselAdvantages'
import EstrOffers from './components/EstrOffers'
import EstrRoster from './components/EstrRoster'
import EstrForm from './components/EstrForm'
import EstrFooter from './components/EstrFooter'
import '../empilhadeiras-litio/styles/equip.css'

export default function LandingEquipamentosEstrategicos() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Locação de Equipamentos Estratégicos — Avapex Transportes</title>
        <meta
          name="description"
          content="Locação de empilhadeiras diesel de 7 a 16 toneladas e caminhão 3/4 com manutenção inclusa e suporte 24/7. Soluções para logística, indústria e mineração."
        />
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

      <div className="eqp-page">
        <EstrHeader />
        <main className="pt-20">
          <EstrHero />
          <EstrRoster />
          <EstrDieselAdvantages />
          <EstrOffers />
          <EstrForm />
        </main>
        <EstrFooter />
      </div>
    </HelmetProvider>
  )
}
