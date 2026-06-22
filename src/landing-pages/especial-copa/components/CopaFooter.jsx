import { Instagram, Linkedin } from 'lucide-react'
import { WHATSAPP_TAIS, WHATSAPP_JOICE, PHONE_TAIS, PHONE_JOICE } from '../../../constants/contact'

const atividades = [
  'Transporte rodoviário de carga geral',
  'Transporte rodoviário de produtos perigosos',
  'Locação de máquinas e equipamentos para construção',
  'Locação de máquinas e equipamentos industriais',
  'Manutenção e reparação de máquinas para transporte e elevação de cargas',
  'Carga e descarga',
  'Atividades auxiliares dos transportes terrestres',
  'Comércio atacadista de máquinas para terraplenagem, mineração e construção',
  'Depósito de mercadorias para terceiros',
  'Distribuição de água por caminhões',
]

export default function CopaFooter() {
  return (
    <footer
      className="w-full border-t-4"
      style={{ borderColor: '#009B3A', background: 'rgba(17,20,21,0.98)' }}
    >
      <div className="container mx-auto px-6 py-12">

        {/* Logo + botão site institucional */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-col items-center gap-4">
            <a href="https://www.avapex.com.br" aria-label="Avapex Transportes" className="hover:opacity-60 transition-opacity">
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
              className="px-5 py-2 border text-sm font-bold uppercase tracking-widest transition-all hover:bg-[#F3BE55] hover:text-[#111415]"
              style={{ borderColor: '#F3BE55', color: '#F3BE55' }}
            >
              Site Institucional
            </a>
          </div>
        </div>

        {/* 3 colunas */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-3 gap-10 mb-8">

            {/* Coluna 1: Contato */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-1">Central de Atendimento</p>
                <a href={WHATSAPP_TAIS} className="text-white/80 text-base font-bold hover:text-[#F3BE55] transition-colors block">
                  Taís · {PHONE_TAIS}
                </a>
                <a href={WHATSAPP_JOICE} className="text-white/80 text-base font-bold hover:text-[#F3BE55] transition-colors block">
                  Joice · {PHONE_JOICE}
                </a>
              </div>
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-1">E-mail Corporativo</p>
                <a href="mailto:comercial@avapex.com.br" className="text-white/80 text-base hover:text-[#F3BE55] transition-colors block">
                  comercial@avapex.com.br
                </a>
                <a href="mailto:comercial3@avapex.com.br" className="text-white/80 text-base hover:text-[#F3BE55] transition-colors block">
                  comercial3@avapex.com.br
                </a>
              </div>
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-1">Matriz</p>
                <p className="text-white/80 text-base leading-relaxed">
                  Rodovia BR040, 22750, Barreira<br />Cons. Lafaiete / MG
                </p>
              </div>
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-1">CNPJ</p>
                <p className="text-white/80 text-base font-mono">36.407.430/0001-00</p>
              </div>
            </div>

            {/* Coluna 2: Redes Sociais */}
            <div className="flex flex-col gap-4">
              <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">Siga-nos nas Redes Sociais</p>
              <a
                href="https://www.instagram.com/avapextransportes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Avapex Transportes"
                className="flex items-center gap-3 text-white/60 hover:text-[#F3BE55] transition-colors text-base font-medium"
              >
                <Instagram size={18} aria-hidden="true" />
                @avapextransportes
              </a>
              <a
                href="https://www.linkedin.com/company/avapex-transportes/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Avapex Transportes"
                className="flex items-center gap-3 text-white/60 hover:text-[#F3BE55] transition-colors text-base font-medium"
              >
                <Linkedin size={18} aria-hidden="true" />
                Avapex Transportes
              </a>
              <a
                href={WHATSAPP_TAIS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Avapex Transportes"
                className="flex items-center gap-3 text-white/60 hover:text-[#F3BE55] transition-colors text-base font-medium"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                     strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7
                           8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0
                           1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1
                           3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Coluna 3: Área de Atuação */}
            <div>
              <h4 className="text-white/40 text-sm font-bold uppercase tracking-widest mb-4">
                Área de Atuação
              </h4>
              <ul className="flex flex-col gap-2">
                {atividades.map((desc) => (
                  <li key={desc}>
                    <a
                      href="#orcamento"
                      className="flex items-start gap-2 text-white/50 text-sm leading-relaxed
                                 hover:text-[#F3BE55] transition-colors group"
                    >
                      <span className="text-[#F3BE55] mt-0.5 shrink-0">▸</span>
                      <span className="group-hover:underline underline-offset-2">{desc}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-center text-white/25 text-xs">
              © 2026 Avapex Transportes. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
