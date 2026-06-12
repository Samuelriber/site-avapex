import { Award, ShieldCheck, Map, Clock, BadgeCheck, Users } from 'lucide-react'
import { COMPANY_YEARS_EXPERIENCE } from '../constants/company'
import SectionHeader from './SectionHeader'

const reasons = [
  {
    icon: Award,
    title: 'Certificação ISO 9001',
    description: 'Processos auditados e padronizados que garantem qualidade e rastreabilidade em cada operação.',
    delay: 0,
  },
  {
    icon: Clock,
    title: `+${COMPANY_YEARS_EXPERIENCE} Anos de Experiência`,
    description: 'Histórico sólido de atuação nos setores de mineração, indústria pesada e ferrovia.',
    delay: 100,
  },
  {
    icon: ShieldCheck,
    title: 'Segurança em Primeiro Lugar',
    description: 'Programas de prevenção, treinamentos contínuos e cultura de segurança integrada à operação.',
    delay: 200,
  },
  {
    icon: Map,
    title: 'Cobertura Estratégica',
    description: 'Matriz em MG e filiais em SP e RJ para pronto atendimento em todo o território nacional.',
    delay: 300,
  },
  {
    icon: BadgeCheck,
    title: 'Frota Própria Atualizada',
    description: 'Equipamentos modernos com manutenção preventiva rigorosa para máxima disponibilidade.',
    delay: 400,
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Motoristas e operadores treinados, comprometidos com resultado e satisfação do cliente.',
    delay: 500,
  },
]

export default function WhyUs() {
  return (
    <section id="diferenciais" className="py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6">

        <SectionHeader
          title="Por que terceirizar sua logística conosco?"
          subtitle="Focamos no que fazemos de melhor para que você possa focar no seu negócio."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description, delay }, index) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={delay}
              className="relative overflow-hidden bg-white border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all flex gap-5 items-start"
            >
              {/* Decorative ordinal number */}
              <span
                className="absolute top-2 right-3 font-barlow font-bold text-7xl text-brand-yellow select-none pointer-events-none leading-none"
                style={{ opacity: 0.10 }}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="bg-yellow-50 w-11 h-11 rounded-sm flex items-center justify-center shrink-0 mt-0.5 relative z-10">
                <Icon className="text-brand-yellow" size={22} aria-hidden="true" />
              </div>
              <div className="relative z-10">
                <h3 className="text-brand-navy font-bold text-base mb-1.5">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
