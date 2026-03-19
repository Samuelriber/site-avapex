import { Package, Network, Settings, ArrowUpFromLine, Fuel, Truck } from 'lucide-react'

const services = [
  {
    icon: Package,
    title: 'Transporte Rodoviário',
    description: 'Transporte rodoviário de carga fechada em todo território nacional com foco na região sudeste.',
    delay: 0,
  },
  {
    icon: Network,
    title: 'Intralogística',
    description: 'Transporte e movimentação interna com equipamentos móveis principalmente empilhadeiras.',
    delay: 100,
  },
  {
    icon: Settings,
    title: 'Locação de Equipamentos',
    description: 'Frota completa de veículos pesados e máquinas da linha amarela.',
    delay: 200,
  },
  {
    icon: ArrowUpFromLine,
    title: 'Içamento de Cargas',
    description: 'Serviços de movimentação e içamento de carga com caminhões Guindauto e manipuladores.',
    delay: 300,
  },
  {
    icon: Fuel,
    title: 'Apoio Logístico',
    description: 'Caminhão Comboio para abastecimento rápido e suporte tático de frotas em campo.',
    delay: 400,
  },
  {
    icon: Truck,
    title: 'Cargas Especiais',
    description: 'Transporte de cargas especiais e dimensionadas.',
    delay: 500,
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0f172a] text-4xl font-extrabold mb-4">Nossos Serviços</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, delay }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all group"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-yellow-100">
                <Icon className="w-6 h-6 text-[#0f172a]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0f172a]">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
