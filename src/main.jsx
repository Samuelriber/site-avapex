import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Landing pages — lazy loaded para não impactar bundle do site principal
const LandingPageTemplate = lazy(() => import('./landing-pages/_template'))

// Adicionar novas LPs aqui:
// const LPMineracao = lazy(() => import('./landing-pages/mineracao'))
const LPEmpilhadeirasLitio = lazy(() => import('./landing-pages/empilhadeiras-litio'))
const EqpObrigado         = lazy(() => import('./landing-pages/empilhadeiras-litio/EqpObrigado'))
const LPEspecialCopa     = lazy(() => import('./landing-pages/especial-copa'))
const CopaObrigado       = lazy(() => import('./landing-pages/especial-copa/CopaObrigado'))
const Obrigado           = lazy(() => import('./pages/Obrigado'))

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
        <Route
          path="/lp/empilhadeiras-litio"
          element={
            <Suspense fallback={<div style={{ background: '#0B1121', minHeight: '100vh' }} />}>
              <LPEmpilhadeirasLitio />
            </Suspense>
          }
        />
        <Route
          path="/lp/empilhadeiras-litio/obrigado"
          element={
            <Suspense fallback={<div style={{ background: '#0B1121', minHeight: '100vh' }} />}>
              <EqpObrigado />
            </Suspense>
          }
        />
        <Route
          path="/lp/especial-copa"
          element={
            <Suspense fallback={<div style={{ background: '#0B1121', minHeight: '100vh' }} />}>
              <LPEspecialCopa />
            </Suspense>
          }
        />
        <Route
          path="/lp/especial-copa/obrigado"
          element={
            <Suspense fallback={<div style={{ background: '#0B1121', minHeight: '100vh' }} />}>
              <CopaObrigado />
            </Suspense>
          }
        />
        <Route
          path="/obrigado"
          element={
            <Suspense fallback={<div style={{ background: '#0B1121', minHeight: '100vh' }} />}>
              <Obrigado />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
