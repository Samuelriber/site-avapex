import { Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import { WHATSAPP_TAIS, WHATSAPP_JOICE, PHONE_TAIS, PHONE_JOICE } from '../constants/contact'
import { LOGO_WHITE } from '../styles/logoStyles'

const navLinks = [
  { href: '#home',          label: 'Início' },
  { href: '#servicos',      label: 'Serviços' },
  { href: '#diferenciais',  label: 'Diferenciais' },
  { href: '#equipamentos',  label: 'Frota' },
  { href: '#credibilidade', label: 'Clientes' },
  { href: '#quem-somos',    label: 'Quem Somos' },
]

const servicos = [
  { href: '#servicos', label: 'Transporte de Carga Geral' },
  { href: '#servicos', label: 'Produtos Perigosos' },
  { href: '#servicos', label: 'Locação Industrial' },
  { href: '#servicos', label: 'Locação para Construção' },
  { href: '#servicos', label: 'Carga e Descarga' },
  { href: '#servicos', label: 'Distribuição de Água' },
  { href: '#servicos', label: 'Depósito para Terceiros' },
]

const empresa = [
  { href: '#quem-somos', label: 'Sobre a Avapex' },
  { href: '#mvv',        label: 'Missão e Valores' },
  { href: '#quem-somos', label: 'Política de Gestão' },
  { href: '#orcamento',  label: 'Solicitar Orçamento' },
]

const IconWrap = ({ href, label, children, external }) => (
  <a
    href={href}
    aria-label={label}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center
               text-slate-400 hover:text-brand-yellow hover:border-brand-yellow transition-colors shrink-0"
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Col 1 — Logo + redes sociais */}
          <div className="flex flex-col gap-7 lg:pr-10 lg:border-r lg:border-slate-800 shrink-0">
            <a href="#home" aria-label="Voltar ao topo" className="hover:opacity-70 transition-opacity">
              <img
                src="/img/img/Logos/logo-avapex-transportes-v1.svg"
                alt="Avapex Transportes"
                style={{ ...LOGO_WHITE, height: '44px', opacity: 0.85 }}
              />
            </a>
            <div className="flex items-center gap-3">
              <IconWrap href="https://www.instagram.com/avapextransportes/" label="Instagram" external>
                <Instagram size={16} aria-hidden="true" />
              </IconWrap>
              <IconWrap href="https://www.linkedin.com/company/avapex-transportes/" label="LinkedIn" external>
                <Linkedin size={16} aria-hidden="true" />
              </IconWrap>
              <IconWrap href={WHATSAPP_TAIS} label="WhatsApp" external>
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

            <a
              href="https://avapextransportes.vagas.solides.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-bold text-brand-yellow border border-brand-yellow
                         px-4 py-2 hover:bg-brand-yellow hover:text-brand-navy transition-colors tracking-wide"
            >
              Trabalhe Conosco →
            </a>
          </div>

          {/* Col 2 — Precisa de ajuda? */}
          <div className="flex flex-col gap-4 lg:px-10 lg:border-r lg:border-slate-800 shrink-0">
            <p className="text-white font-bold text-base">Precisa de ajuda?</p>
            <div className="flex flex-col gap-3">
              <a href={WHATSAPP_TAIS} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-slate-300 hover:text-brand-yellow transition-colors text-sm">
                <Phone size={13} className="text-brand-yellow shrink-0" aria-hidden="true" />
                Taís · {PHONE_TAIS}
              </a>
              <a href={WHATSAPP_JOICE} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-slate-300 hover:text-brand-yellow transition-colors text-sm">
                <Phone size={13} className="text-brand-yellow shrink-0" aria-hidden="true" />
                Joice · {PHONE_JOICE}
              </a>
              <a href="mailto:comercial@avapex.com.br"
                 className="flex items-center gap-2 text-slate-300 hover:text-brand-yellow transition-colors text-sm">
                <Mail size={13} className="text-brand-yellow shrink-0" aria-hidden="true" />
                comercial@avapex.com.br
              </a>
              <a href="mailto:comercial3@avapex.com.br"
                 className="flex items-center gap-2 text-slate-300 hover:text-brand-yellow transition-colors text-sm">
                <Mail size={13} className="text-brand-yellow shrink-0" aria-hidden="true" />
                comercial3@avapex.com.br
              </a>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin size={13} className="text-brand-yellow shrink-0 mt-0.5" aria-hidden="true" />
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
                    <a href={href} className="text-slate-400 text-sm hover:text-brand-yellow transition-colors">
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
                    <a href={href} className="text-slate-400 text-sm hover:text-brand-yellow transition-colors">
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
                    <a href={href} className="text-slate-400 text-sm hover:text-brand-yellow transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">CNPJ</p>
                <p className="text-slate-400 text-sm font-mono">36.407.430/0001-00</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar — amarelo como acento, texto navy */}
      <div className="bg-brand-yellow">
        <p className="container mx-auto px-6 py-3 text-center text-brand-navy text-xs font-semibold">
          © 2026 avapex.com.br — todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
