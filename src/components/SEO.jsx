// SEO.jsx
// Currently renders nothing — meta tags live in index.html for Vite SSG compatibility.
//
// FUTURE INTEGRATION — react-helmet-async:
// ------------------------------------------
// 1. npm install react-helmet-async
// 2. Wrap <App> in <HelmetProvider> inside src/main.jsx
// 3. Uncomment the implementation below and remove static tags from index.html
//
// import { Helmet } from 'react-helmet-async'
//
// export default function SEO() {
//   return (
//     <Helmet>
//       <title>Avapex Transportes | Especialistas em Logística e Transporte Rodoviário</title>
//       <meta name="description" content="Aumente a eficiência da sua operação. A Avapex atua há mais de 18 anos com transporte rodoviário, intralogística e locação de máquinas com certificação ISO 9001." />
//       <meta name="robots" content="index, follow" />
//       <link rel="canonical" href="https://www.avapex.com.br/" />
//
//       {/* Open Graph */}
//       <meta property="og:title" content="Avapex Transportes | Transporte de Alta Performance" />
//       <meta property="og:description" content="Frota moderna e equipe especializada para o setor de mineração e indústria. Solicite um orçamento sem compromisso." />
//       <meta property="og:type" content="website" />
//       <meta property="og:url" content="https://www.avapex.com.br/" />
//       <meta property="og:image" content="https://www.avapex.com.br/img/og-image.jpg" />
//       <meta property="og:locale" content="pt_BR" />
//
//       {/* Geo */}
//       <meta name="geo.region" content="BR-MG" />
//       <meta name="geo.placename" content="Conselheiro Lafaiete" />
//       <meta name="geo.position" content="-20.6636;-43.7845" />
//       <meta name="ICBM" content="-20.6636, -43.7845" />
//     </Helmet>
//   )
// }

export default function SEO() {
  return null
}
