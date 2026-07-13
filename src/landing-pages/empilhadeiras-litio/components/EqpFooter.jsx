import { Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import { WHATSAPP_TAIS, WHATSAPP_JOICE, PHONE_TAIS, PHONE_JOICE, ADDRESS } from '../../../constants/contact'
import { useSetorParam } from '../hooks/useSetorParam'
import { buildWhatsappHref } from '../utils/whatsapp'

const solucoes = [
  { href: '#orcamento', label: 'Frota de Empilhadeiras' },
  { href: '#orcamento', label: 'Soluções para Mineração' },
  { href: '#orcamento', label: 'Logística e Armazéns' },
]

const institucional = [
  { href: 'https://www.avapex.com.br/#quem-somos', label: 'Sobre a Avapex' },
  { href: 'https://www.avapex.com.br', label: 'Site Institucional' },
]

const LINK_CLASS = 'text-sm transition-colors text-eqp-fog hover:text-eqp-caution'

const IconWrap = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full flex items-center justify-center text-eqp-fog border border-eqp-seam hover:text-eqp-caution hover:border-eqp-caution transition-colors shrink-0"
  >
    {children}
  </a>
)

export default function EqpFooter() {
  const setor = useSetorParam()
  const whatsappTais = buildWhatsappHref(WHATSAPP_TAIS, setor)
  const whatsappJoice = buildWhatsappHref(WHATSAPP_JOICE, setor)

  return (
    <footer className="w-full border-t-4 border-[#11A028] bg-eqp-panel">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Col 1 — Logo + social */}
          <div className="flex flex-col gap-7 shrink-0 lg:pr-10 lg:border-r border-eqp-seam">
            <div className="flex flex-col items-start gap-4">
              <img
                src="/img/img/Logos/logo-avapex-transportes-v2.svg"
                alt="Avapex Transportes"
                className="h-10 w-auto object-contain"
              />
              <p className="text-eqp-fog text-sm max-w-[240px]">
                Especialistas em locação de equipamentos pesados e soluções elétricas a lítio para a indústria nacional.
              </p>
              <a
                href="https://www.avapex.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 eqp-label-caps border border-eqp-caution text-eqp-caution hover:bg-eqp-caution hover:text-eqp-caution-ink transition-all"
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
              <IconWrap href={whatsappTais} label="WhatsApp">
                <MessageCircle size={16} aria-hidden="true" />
              </IconWrap>
            </div>
          </div>

          {/* Col 2 — Precisa de ajuda? */}
          <div className="flex flex-col gap-4 shrink-0 lg:px-10 lg:border-r border-eqp-seam">
            <p className="text-eqp-chalk font-bold text-base">Precisa de ajuda?</p>
            <div className="flex flex-col gap-3">
              <a href={whatsappTais} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-eqp-fog hover:text-eqp-caution transition-colors">
                <Phone size={13} className="text-eqp-caution shrink-0" aria-hidden="true" />
                Taís · {PHONE_TAIS}
              </a>
              <a href={whatsappJoice} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-eqp-fog hover:text-eqp-caution transition-colors">
                <Phone size={13} className="text-eqp-caution shrink-0" aria-hidden="true" />
                Joice · {PHONE_JOICE}
              </a>
              <a href="mailto:comercial@avapex.com.br" className="flex items-center gap-2 text-sm text-eqp-fog hover:text-eqp-caution transition-colors">
                <Mail size={13} className="text-eqp-caution shrink-0" aria-hidden="true" />
                comercial@avapex.com.br
              </a>
              <a href="mailto:comercial3@avapex.com.br" className="flex items-center gap-2 text-sm text-eqp-fog hover:text-eqp-caution transition-colors">
                <Mail size={13} className="text-eqp-caution shrink-0" aria-hidden="true" />
                comercial3@avapex.com.br
              </a>
              <div className="flex items-start gap-2 text-sm text-eqp-fog">
                <MapPin size={13} className="text-eqp-caution shrink-0 mt-0.5" aria-hidden="true" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Cols 3-4 — Links */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-10">
            <div>
              <p className="text-eqp-chalk font-bold text-sm uppercase tracking-wider mb-4 eqp-label-caps">Soluções</p>
              <ul className="flex flex-col gap-2.5">
                {solucoes.map(({ href, label }) => (
                  <li key={label}>
                    <a href={href} className={LINK_CLASS}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-eqp-chalk font-bold text-sm uppercase tracking-wider mb-4 eqp-label-caps">Institucional</p>
              <ul className="flex flex-col gap-2.5">
                {institucional.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={LINK_CLASS}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-eqp-seam">
                <p className="text-xs uppercase tracking-widest mb-1 text-eqp-fog opacity-60">CNPJ</p>
                <p className="text-sm font-mono text-eqp-fog">36.407.430/0001-00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-[#11A028]">
        <p className="max-w-7xl mx-auto px-4 md:px-6 py-3 text-center text-white text-xs font-semibold">
          © 2026 AVAPEX TRANSPORTES — TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>
    </footer>
  )
}
