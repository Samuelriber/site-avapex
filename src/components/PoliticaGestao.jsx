import { ShieldCheck, TrendingUp, Leaf, HardHat } from 'lucide-react'

const pills = [
  { icon: TrendingUp, label: 'Melhoria Contínua' },
  { icon: Leaf,        label: 'Meio Ambiente' },
  { icon: HardHat,     label: 'Segurança do Trabalho' },
]

export default function PoliticaGestao() {
  return (
    <section id="politica-gestao" className="py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Coluna esquerda */}
          <div data-aos="fade-right">
            <span className="text-brand-yellow text-xs font-bold uppercase tracking-widest">
              Grupo Seday
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mt-3 mb-6 leading-tight">
              Política de Gestão<br className="hidden md:block" /> Integrada
            </h2>
            <div className="w-12 h-1 bg-brand-yellow mb-6" />
            <p className="text-slate-600 text-sm leading-relaxed">
              Atuante nos segmentos de transporte rodoviário de cargas, movimentação de cargas
              industriais e operacionais e locação de máquinas e equipamentos, confirma sua
              responsabilidade em gerar resultados sustentáveis, promovendo a qualidade dos
              serviços, a eficiência operacional e a responsabilidade social, em conformidade
              com os requisitos legais e das partes interessadas.
            </p>
          </div>

          {/* Coluna direita — card */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="bg-white border border-slate-200 shadow-sm p-8"
          >
            {/* Eyebrow com régua lateral e ícone à direita */}
            <div className="flex items-center gap-3 border-l-4 border-brand-yellow pl-3 mb-4">
              <span className="text-brand-navy text-sm font-bold uppercase tracking-widest shrink-0">
                Comprometimento
              </span>
              <span className="text-slate-200 text-sm">|</span>
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-widest flex-1">
                Política de Gestão Integrada
              </span>
              <ShieldCheck className="text-brand-yellow w-4 h-4 shrink-0" aria-hidden="true" />
            </div>

            {/* Corpo — parágrafo contínuo */}
            <p className="text-sm text-slate-600 leading-7 mb-6">
              A empresa compromete-se com a melhoria contínua de seus processos,
              a satisfação de seus clientes, a proteção do meio ambiente, bem como
              com a promoção de condições de trabalho seguras e saudáveis, prevenindo
              acidentes, incidentes e doenças ocupacionais por meio da eliminação de
              perigos, da redução de riscos e da consulta e participação de seus
              colaboradores.
            </p>

            <hr className="border-slate-200 mb-6" />

            {/* Tags estilo etiqueta industrial */}
            <div className="flex flex-wrap gap-2">
              {pills.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="border-l-2 border-brand-yellow bg-yellow-50 text-brand-navy text-xs font-medium pl-2 pr-4 py-1 flex items-center gap-1.5"
                >
                  <Icon size={14} className="text-brand-yellow" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
