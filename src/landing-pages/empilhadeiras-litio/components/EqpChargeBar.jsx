import { motion } from 'framer-motion'
import { BatteryCharging } from 'lucide-react'

const CELLS = 6

// Indicador de carregamento (tipo loading), não motion vestibular-hostil —
// anima sempre, independente de prefers-reduced-motion.
export default function EqpChargeBar() {
  return (
    <section className="bg-eqp-ink-deep border-y border-eqp-seam py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center gap-4 md:gap-8">
        <span className="eqp-label-caps text-eqp-fog uppercase shrink-0 hidden sm:block">Recarga Rápida</span>

        <div className="flex-1 relative h-3 rounded-sm border border-[#11A028]/30 bg-[#11A028]/10 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#11A028]"
            initial={{ width: '0%' }}
            animate={{ width: ['0%', '100%', '100%', '0%'] }}
            transition={{ duration: 2.6, times: [0, 0.55, 0.8, 1], ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 }}
          />
          {/* divisórias das células da bateria, por cima do preenchimento */}
          <div className="absolute inset-0 flex pointer-events-none" aria-hidden="true">
            {Array.from({ length: CELLS }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-eqp-ink-deep last:border-r-0" />
            ))}
          </div>
        </div>

        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 0.4, ease: 'easeInOut' }}
        >
          <BatteryCharging className="text-[#11A028] shrink-0" size={26} strokeWidth={1.75} aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}
