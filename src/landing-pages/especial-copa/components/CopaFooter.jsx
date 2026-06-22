import { Instagram, Linkedin } from 'lucide-react'
import { WHATSAPP_TAIS, WHATSAPP_JOICE, PHONE_TAIS, PHONE_JOICE } from '../../../constants/contact'

export default function CopaFooter() {
  return (
    <footer
      className="w-full px-6 md:px-20 border-t-4"
      style={{ borderColor: '#009B3A', background: 'rgba(17,20,21,0.95)', backdropFilter: 'blur(8px)' }}
    >
      {/* Logos + redes sociais */}
      <div className="max-w-7xl mx-auto py-10 flex flex-col items-center gap-6 text-center">

        <img
          src="/img/img/Logos/logo-avapex-transportes-v1.svg"
          alt="Avapex Transportes"
          className="h-10 w-auto object-contain"
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }}
        />

        <div className="flex flex-col items-center gap-3">
          <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">
            Siga-nos nas redes sociais
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/avapextransportes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Avapex"
              className="flex items-center gap-2 text-white/50 hover:text-[#F3BE55] transition-colors text-sm font-medium"
            >
              <Instagram size={18} aria-hidden="true" />
              <span>@avapextransportes</span>
            </a>

            <a
              href="https://www.linkedin.com/company/avapex-transportes/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Avapex"
              className="flex items-center gap-2 text-white/50 hover:text-[#F3BE55] transition-colors text-sm font-medium"
            >
              <Linkedin size={18} aria-hidden="true" />
              <span>Avapex Transportes</span>
            </a>

            <a
              href={WHATSAPP_TAIS}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Avapex"
              className="flex items-center gap-2 text-white/50 hover:text-[#F3BE55] transition-colors text-sm font-medium"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                   strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7
                         8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0
                         1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1
                         3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contatos + copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-3 mb-4 text-sm text-white/40">
          <span>
            <span className="text-white/25 text-xs uppercase tracking-wider mr-2">Comercial</span>
            <a href={WHATSAPP_TAIS} className="hover:text-[#F3BE55] transition-colors">
              Taís · {PHONE_TAIS}
            </a>
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <a href={WHATSAPP_JOICE} className="hover:text-[#F3BE55] transition-colors">
            Joice · {PHONE_JOICE}
          </a>
        </div>
        <p className="text-center text-white/25 text-xs">
          © 2026 Avapex Transportes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
