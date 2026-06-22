import { Instagram, Linkedin } from 'lucide-react'
import { WHATSAPP_TAIS, WHATSAPP_JOICE, PHONE_TAIS, PHONE_JOICE } from '../constants/contact'
import { LOGO_WHITE } from '../styles/logoStyles'

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">

        {/* Linha superior: logo + redes sociais */}
        <div className="flex flex-col items-center gap-6 mb-10 text-center">

          <a href="#home" aria-label="Voltar ao topo" className="hover:opacity-60 transition-opacity">
            <img
              src="/img/img/Logos/logo-avapex-transportes-v1.svg"
              alt="Avapex Transportes"
              style={{ ...LOGO_WHITE, height: '44px', opacity: 0.85 }}
            />
          </a>

          {/* Redes sociais */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold">
              Siga-nos nas redes sociais
            </span>
            <div className="flex items-center gap-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/avapextransportes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Avapex Transportes"
                className="flex items-center gap-2 text-slate-400 hover:text-brand-yellow transition-colors text-sm font-medium"
              >
                <Instagram size={18} aria-hidden="true" />
                <span className="hidden sm:inline">@avapextransportes</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/avapex-transportes/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Avapex Transportes"
                className="flex items-center gap-2 text-slate-400 hover:text-brand-yellow transition-colors text-sm font-medium"
              >
                <Linkedin size={18} aria-hidden="true" />
                <span className="hidden sm:inline">Avapex Transportes</span>
              </a>

              {/* WhatsApp — ícone SVG inline pois Lucide não tem WhatsApp */}
              <a
                href={WHATSAPP_TAIS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Avapex Transportes"
                className="flex items-center gap-2 text-slate-400 hover:text-brand-yellow transition-colors text-sm font-medium"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                     strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7
                           8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0
                           1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1
                           3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-slate-800 pt-6">

          {/* Contatos WhatsApp */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 text-sm text-slate-400">
            <span>
              <span className="text-slate-500 text-xs uppercase tracking-wider mr-2">Comercial</span>
              <a href={WHATSAPP_TAIS}
                 className="hover:text-brand-yellow transition-colors">
                Taís · {PHONE_TAIS}
              </a>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <a href={WHATSAPP_JOICE}
                 className="hover:text-brand-yellow transition-colors">
                Joice · {PHONE_JOICE}
              </a>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-center text-slate-500 text-xs">
            © 2026 Avapex Transportes. Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  )
}
