import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Landing pages — lazy loaded para não impactar bundle do site principal
const LandingPageTemplate = lazy(() => import('./landing-pages/_template'))

// Adicionar novas LPs aqui:
// const LPMineracao = lazy(() => import('./landing-pages/mineracao'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Site principal — inalterado */}
        <Route path="/" element={<App />} />

        {/* Landing pages */}
        <Route
          path="/lp/template"
          element={
            <Suspense fallback={<div style={{ background: '#0B1121', minHeight: '100vh' }} />}>
              <LandingPageTemplate />
            </Suspense>
          }
        />

        {/* Adicionar novas LPs aqui: */}
        {/* <Route path="/lp/mineracao" element={<Suspense fallback={null}><LPMineracao /></Suspense>} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
