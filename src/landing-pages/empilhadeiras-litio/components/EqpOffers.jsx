import { Clock, Users, Wrench, FileCheck, Handshake, UserCheck } from 'lucide-react'

const OFFERS = [
  { Icon: Clock, titulo: 'Suporte 24/7', texto: 'Suporte 24 horas por dia, 7 dias por semana.' },
  { Icon: Users, titulo: 'Com ou Sem Operação', texto: 'Contrate com ou sem operador, de acordo com a necessidade da sua empresa.' },
  { Icon: Wrench, titulo: 'Manutenção por Nossa Conta', texto: 'Manutenção 100% por nossa conta, sem custos inesperados.' },
  { Icon: FileCheck, titulo: 'Contrato Transparente', texto: 'Contratos transparentes, sem burocracia e sem letras miúdas.' },
  { Icon: Handshake, titulo: 'Negocie Fácil', texto: 'Negociação rápida, simples e flexível.' },
  { Icon: UserCheck, titulo: 'Consultores Especializados', texto: 'Consultores especializados para encontrar a solução ideal para o seu negócio.' },
]

export default function EqpOffers() {
  return (
    <section className="py-16 md:py-24 bg-eqp-ink max-w-7xl mx-auto px-4 md:px-6">
      <div className="mb-12">
        <h2 className="eqp-h2 text-eqp-chalk mb-4">O Que Oferecemos</h2>
        <div className="h-1 w-16 bg-eqp-caution"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {OFFERS.map(({ Icon, titulo, texto }) => (
          <div key={titulo} className="bg-eqp-panel-sunken p-6 border industrial-border card-hover flex items-start gap-4">
            <Icon size={28} strokeWidth={1.75} className="text-eqp-caution shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-bold text-base text-eqp-chalk">{titulo}</h3>
              {texto && <p className="text-eqp-fog text-sm mt-1">{texto}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
