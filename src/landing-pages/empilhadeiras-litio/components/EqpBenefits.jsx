import { BatteryCharging, Timer, Leaf, Wrench } from 'lucide-react'

const ICON_PROPS = { size: 36, strokeWidth: 1.75, 'aria-hidden': true }

export default function EqpBenefits() {
  return (
    <section className="py-16 md:py-24 bg-eqp-ink max-w-7xl mx-auto px-4 md:px-6">
      <div className="mb-12">
        <h2 className="eqp-h2 text-eqp-chalk mb-4">Vantagens da Tecnologia a Lítio</h2>
        <div className="h-1 w-16 bg-eqp-caution"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-eqp-panel-sunken p-6 border industrial-border card-hover">
          <BatteryCharging {...ICON_PROPS} className="text-eqp-caution mb-4" />
          <h3 className="font-bold text-lg mb-2 text-eqp-chalk">Recarga Rápida</h3>
          <p className="text-eqp-fog text-sm">Cargas de oportunidade durante pausas, eliminando a necessidade de troca de bateria.</p>
        </div>
        <div className="bg-eqp-panel-sunken p-6 border industrial-border card-hover">
          <Timer {...ICON_PROPS} className="text-eqp-caution mb-4" />
          <h3 className="font-bold text-lg mb-2 text-eqp-chalk">Maior Autonomia</h3>
          <p className="text-eqp-fog text-sm">Operação contínua em múltiplos turnos com performance consistente.</p>
        </div>
        <div className="bg-eqp-panel-sunken p-6 border border-eqp-charge bg-eqp-charge/10 card-hover">
          <Leaf {...ICON_PROPS} className="text-eqp-charge-bright mb-4" />
          <h3 className="font-bold text-lg text-eqp-charge-bright mb-2">Zero Emissão</h3>
          <p className="text-eqp-fog text-sm">Operação limpa, ideal para ambientes internos, câmaras frias e indústria alimentícia.</p>
        </div>
        <div className="bg-eqp-panel-sunken p-6 border industrial-border card-hover">
          <Wrench {...ICON_PROPS} className="text-eqp-caution mb-4" />
          <h3 className="font-bold text-lg mb-2 text-eqp-chalk">Menor Manutenção</h3>
          <p className="text-eqp-fog text-sm">Baterias seladas que não requerem adição de água ou manutenção diária.</p>
        </div>
      </div>
    </section>
  )
}
