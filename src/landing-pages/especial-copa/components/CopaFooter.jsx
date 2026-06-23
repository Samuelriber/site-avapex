import { Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import { WHATSAPP_TAIS, WHATSAPP_JOICE, PHONE_TAIS, PHONE_JOICE } from '../../../constants/contact'

const navLinks = [
  { href: '#home',       label: 'Início' },
  { href: '#equipamentos', label: 'Equipamentos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#orcamento', label: 'Solicitar Orçamento' },
]

const servicos = [
  { href: '#orcamento', label: 'Transporte de Carga Geral' },
  { href: '#orcamento', label: 'Produtos Perigosos' },
  { href: '#orcamento', label: 'Locação Industrial' },
  { href: '#orcamento', label: 'Locação para Construção' },
  { href: '#orcamento', label: 'Carga e Descarga' },
  { href: '#orcamento', label: 'Distribuição de Água' },
  { href: '#orcamento', label: 'Depósito para Terceiros' },
]

const empresa = [
  { href: 'https://www.avapex.com.br/#quem-somos', label: 'Sobre a Avapex' },
  { href: 'https://www.avapex.com.br/#mvv',        label: 'Missão e Valores' },
  { href: 'https://www.avapex.com.br/#servicos',   label: 'Nossos Serviços' },
  { href: 'https://www.avapex.com.br',             label: 'Site Institucional' },
]

const IconWrap = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full flex items-center justify-center
               text-white/50 transition-colors shrink-0"
    style={{ border: '1px solid rgba(255,255,255,0.2)' }}
    onMouseEnter={e => {
      e.currentTarget.style.color = '#F3BE55'
      e.currentTarget.style.borderColor = '#F3BE55'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
    }}
  >
    {children}
  </a>
)

export default function CopaFooter() {
  return (
    <footer
      className="w-full border-t-4"
      style={{ borderColor: '#009B3A', background: 'rgba(17,20,21,0.98)' }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Col 1 — Logo + social */}
          <div
            className="flex flex-col gap-7 shrink-0 lg:pr-10"
            style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex flex-col items-start gap-4">
              <a
                href="https://www.avapex.com.br"
                aria-label="Avapex Transportes"
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src="/img/img/Logos/logo-avapex-transportes-v1.svg"
                  alt="Avapex Transportes"
                  className="h-11 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }}
                />
              </a>
              <a
                href="https://www.avapex.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-all"
                style={{ border: '1px solid #F3BE55', color: '#F3BE55' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#F3BE55'
                  e.currentTarget.style.color = '#111415'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#F3BE55'
                }}
              >
                Site Institucional
              </a>
            </div>
            <div className="flex items-center gap-3">
              <IconWrap href="https://www.instagram.com/avapextransportes/" label="Instagram">
                <Instagram size={16} aria-hidden="true" />
              </IconWrap>
              <IconWrap href="https://www.linkedin.com/company/avapex-transportes/" label="LinkedIn">
                <Linkedin size={16} aria-hidden="true" />
              </IconWrap>
              <IconWrap href={WHATSAPP_TAIS} label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                     strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7
                           8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0
                           1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1
                           3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </IconWrap>
            </div>
          </div>

          {/* Col 2 — Precisa de ajuda? */}
          <div
            className="flex flex-col gap-4 shrink-0 lg:px-10"
            style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-white font-bold text-base">Precisa de ajuda?</p>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_TAIS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F3BE55'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <Phone size={13} style={{ color: '#F3BE55' }} aria-hidden="true" className="shrink-0" />
                Taís · {PHONE_TAIS}
              </a>
              <a
                href={WHATSAPP_JOICE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F3BE55'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <Phone size={13} style={{ color: '#F3BE55' }} aria-hidden="true" className="shrink-0" />
                Joice · {PHONE_JOICE}
              </a>
              <a
                href="mailto:comercial@avapex.com.br"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F3BE55'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <Mail size={13} style={{ color: '#F3BE55' }} aria-hidden="true" className="shrink-0" />
                comercial@avapex.com.br
              </a>
              <a
                href="mailto:comercial3@avapex.com.br"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F3BE55'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <Mail size={13} style={{ color: '#F3BE55' }} aria-hidden="true" className="shrink-0" />
                comercial3@avapex.com.br
              </a>
              <div className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <MapPin size={13} style={{ color: '#F3BE55' }} aria-hidden="true" className="shrink-0 mt-0.5" />
                <span>Rodovia BR040, 22750, Barreira<br />Cons. Lafaiete / MG</span>
              </div>
            </div>
          </div>

          {/* Cols 3-5 — Links */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:pl-10">

            {/* Navegação */}
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navegação</p>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#F3BE55'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">Serviços</p>
              <ul className="flex flex-col gap-2.5">
                {servicos.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#F3BE55'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">Empresa</p>
              <ul className="flex flex-col gap-2.5">
                {empresa.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#F3BE55'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>CNPJ</p>
                <p className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>36.407.430/0001-00</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Barra inferior — verde Copa */}
      <div style={{ background: '#009B3A' }}>
        <p className="container mx-auto px-6 py-3 text-center text-white text-xs font-semibold">
          © 2026 avapex.com.br — todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
