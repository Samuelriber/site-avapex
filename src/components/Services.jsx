import { Truck, Boxes, Wrench, HardHat } from 'lucide-react'
import { COMPANY_YEARS_EXPERIENCE } from '../constants/company'

const services = [
  {
    icon: Truck,
    title: 'Transporte Rodoviário',
    description:
      'Frota diversificada para transporte de cargas a granel, secas e especiais em todo o Brasil, com rastreamento em tempo real e motoristas capacitados.',
    delay: 0,
  },
  {
    icon: Boxes,
    title: 'Intralogística',
    description:
      'Operação e movimentação de cargas dentro do seu pátio ou planta industrial com equipamentos especializados e equipe técnica dedicada.',
    delay: 100,
  },
  {
    icon: Wrench,
    title: 'Locação de Máquinas',
    description:
      'Aluguel de linha amarela, empilhadeiras e equipamentos pesados com ou sem operador para obras, mineração e operações industriais.',
    delay: 200,
  },
  {
    icon: HardHat,
    title: 'Movimentação de Carga Pesada',
    description:
      'Planejamento e execução de cargas especiais, içamentos e translados de grandes volumes com segurança e eficiência operacional.',
    delay: 300,
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-16 bg-brand-dust border-b border-slate-200">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-navy text-4xl font-extrabold mb-4">Nossos Serviços</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Soluções logísticas completas para os setores de mineração, indústria pesada e
            ferrovia, com mais de {COMPANY_YEARS_EXPERIENCE} anos de expertise operacional.
          </p>
          <div className="w-16 h-1 bg-brand-yellow mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description, delay }) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={delay}
              className="bg-brand-dust border border-slate-200 border-l-2 border-l-brand-yellow p-6 shadow-sm hover:bg-white hover:shadow-lg transition-all flex gap-5 items-start"
            >
              <div className="shrink-0 mt-1">
                <Icon className="text-brand-yellow" size={32} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-brand-navy font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
