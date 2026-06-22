import { Instagram, Linkedin } from 'lucide-react'
import { WHATSAPP_TAIS, WHATSAPP_JOICE, PHONE_TAIS, PHONE_JOICE } from '../constants/contact'
import { LOGO_WHITE } from '../styles/logoStyles'

const atividades = [
  { cnae: '49.30-2-01', desc: 'Transporte rodoviário de carga geral' },
  { cnae: '49.30-2-03', desc: 'Transporte rodoviário de produtos perigosos' },
  { cnae: '77.32-2-01', desc: 'Locação de máquinas e equipamentos para construção sem operador' },
  { cnae: '77.39-0-99', desc: 'Locação de outras máquinas e equipamentos industriais sem operador' },
  { cnae: '33.14-7-08', desc: 'Manutenção e reparação de máquinas e equipamentos para transporte e elevação de cargas' },
  { cnae: '52.12-5-00', desc: 'Carga e descarga' },
  { cnae: '52.29-0-99', desc: 'Atividades auxiliares dos transportes terrestres' },
  { cnae: '46.62-1-00', desc: 'Comércio atacadista de máquinas para terraplenagem, mineração e construção' },
  { cnae: '52.11-7-99', desc: 'Depósito de mercadorias para terceiros' },
  { cnae: '36.00-6-02', desc: 'Distribuição de água por caminhões' },
]

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
        <div className="border-t border-slate-800 pt-8">

          {/* Área de Atuação + CTA */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">

            {/* Coluna: Dados legais */}
            <div>
              <h4 className="text-slate-300 text-xs font-bold uppercase tracking-widest mb-3">
                Dados da Empresa
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                <span className="text-slate-400 font-semibold">Avapex Transportes Ltda.</span>
              </p>
              <p className="text-slate-500 text-xs mt-1">
                CNPJ: <span className="text-slate-400">36.407.430/0001-00</span>
              </p>
              <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                Rodovia BR-040, 22750 — Barreira<br />
                Conselheiro Lafaiete / MG
              </p>
              <a
                href="#orcamento"
                className="inline-block mt-4 px-4 py-2 text-xs font-bold uppercase tracking-widest
                           border border-brand-yellow text-brand-yellow hover:bg-brand-yellow
                           hover:text-brand-navy transition-all rounded-none"
              >
                Solicitar Orçamento →
              </a>
            </div>

            {/* Coluna: Atividades principais */}
            <div className="md:col-span-2">
              <h4 className="text-slate-300 text-xs font-bold uppercase tracking-widest mb-3">
                Áreas de Atuação — CNAEs
              </h4>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
                {atividades.map((a) => (
                  <li key={a.cnae} className="text-slate-500 text-xs leading-relaxed flex gap-2">
                    <span className="text-brand-yellow font-mono shrink-0">{a.cnae}</span>
                    <span>{a.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Contatos + Copyright */}
          <div className="border-t border-slate-800 pt-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4 text-sm text-slate-400">
              <span>
                <span className="text-slate-500 text-xs uppercase tracking-wider mr-2">Comercial</span>
                <a href={WHATSAPP_TAIS} className="hover:text-brand-yellow transition-colors">
                  Taís · {PHONE_TAIS}
                </a>
              </span>
              <span className="hidden sm:inline text-slate-700">|</span>
              <a href={WHATSAPP_JOICE} className="hover:text-brand-yellow transition-colors">
                Joice · {PHONE_JOICE}
              </a>
            </div>
            <p className="text-center text-slate-500 text-xs">
              © 2026 Avapex Transportes. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
