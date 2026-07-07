import { Zap, Fuel, Construction, Wrench, Rocket, Timer, Dumbbell, Coins } from 'lucide-react'
import { WHATSAPP_TAIS } from '../../../constants/contact'
import { buildWhatsappHref } from '../utils/whatsapp'

const ADVANTAGES = [
  { Icon: Zap, titulo: 'Alto Desempenho', texto: 'Potência constante para movimentar cargas pesadas com eficiência, mesmo em operações intensivas e longos turnos.' },
  { Icon: Fuel, titulo: 'Maior Autonomia', texto: 'Longas jornadas de trabalho com abastecimento rápido, reduzindo o tempo de parada e aumentando a produtividade.' },
  { Icon: Construction, titulo: 'Robustez para Ambientes Externos', texto: 'Projetadas para operar em terrenos irregulares, pátios, obras e centros logísticos com máxima resistência.' },
  { Icon: Wrench, titulo: 'Fácil Manutenção', texto: 'Componentes robustos e ampla disponibilidade de peças, garantindo menor tempo de máquina parada.' },
  { Icon: Rocket, titulo: 'Máxima Produtividade', texto: 'Movimente mais cargas em menos tempo com desempenho confiável para operações de alta demanda.' },
  { Icon: Timer, titulo: 'Abastecimento em Minutos', texto: 'Reabasteça rapidamente e mantenha sua operação em funcionamento sem longos períodos de recarga.' },
  { Icon: Dumbbell, titulo: 'Força para Grandes Desafios', texto: 'Capacidade para transportar cargas pesadas com estabilidade e segurança em qualquer turno.' },
  { Icon: Coins, titulo: 'Excelente Custo-Benefício', texto: 'Alta durabilidade, baixo custo operacional e excelente retorno sobre o investimento.' },
]

export default function EstrDieselAdvantages() {
  const whatsappHref = buildWhatsappHref(WHATSAPP_TAIS)

  return (
    <section className="py-16 md:py-24 bg-eqp-ink-deep bg-pattern">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="eqp-h2 text-eqp-chalk mb-4">Vantagens da Tecnologia a Diesel</h2>
          <div className="h-1 w-16 bg-eqp-caution"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {ADVANTAGES.map(({ Icon, titulo, texto }) => (
            <div key={titulo} className="bg-eqp-panel-sunken p-6 border industrial-border card-hover flex flex-col items-start gap-3">
              <Icon size={28} strokeWidth={1.75} className="text-eqp-caution shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-base text-eqp-chalk">{titulo}</h3>
                <p className="text-eqp-fog text-sm mt-1">{texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
          <h3 className="eqp-h2 text-eqp-chalk mb-4">Sua operação merece mais desempenho.</h3>
          <p className="eqp-body-lg text-eqp-fog mb-8">
            Descubra a empilhadeira diesel ideal para aumentar sua produtividade, reduzir custos operacionais e manter sua operação sempre em movimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a className="btn-primary text-center" href="#orcamento">Solicitar Orçamento</a>
            <a className="btn-secondary text-center" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Falar com um Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
