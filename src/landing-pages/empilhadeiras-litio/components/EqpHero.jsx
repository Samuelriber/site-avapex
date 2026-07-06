import { motion, useReducedMotion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import { WHATSAPP_TAIS } from '../../../constants/contact'
import { useSetorParam } from '../hooks/useSetorParam'
import { buildWhatsappHref } from '../utils/whatsapp'

const HERO_IMG = '/img/img/fundos/fundo-lp-empilhadeira-eletrica-2.jpg'

export default function EqpHero() {
  const reduceMotion = useReducedMotion()
  const setor = useSetorParam()
  const whatsappHref = buildWhatsappHref(WHATSAPP_TAIS, setor)

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: reduceMotion ? 0 : 0.1 } },
  }
  const item = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }

  return (
    <section className="relative bg-eqp-ink-deep overflow-hidden border-b border-eqp-seam py-16 md:py-32">
      <div
        className="absolute inset-0 z-0 bg-cover bg-right"
        style={{ backgroundImage: `url('${HERO_IMG}')` }}
        role="img"
        aria-label="Empilhadeira elétrica Avapex em operação num centro de distribuição"
      ></div>
      <div className="absolute inset-0 bg-eqp-ink/55 md:bg-gradient-to-r md:from-eqp-ink md:via-eqp-ink/45 md:to-transparent z-10"></div>
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="md:col-span-7 space-y-6">
          <motion.div
            variants={item}
            className="eqp-badge-charge inline-flex items-center gap-2 bg-eqp-charge/20 border border-eqp-charge px-3 py-1 rounded-sm eqp-label-caps uppercase text-eqp-charge-bright"
          >
            <Leaf size={16} strokeWidth={2} aria-hidden="true" />
            Operação 100% Livre de Emissões
          </motion.div>
          <motion.h1 variants={item} className="eqp-h1 text-eqp-chalk">
            Reduza em Até 90% os Custos
          </motion.h1>
          <motion.p variants={item} className="eqp-h2 text-eqp-charge-bright -mt-4">
            com Empilhadeiras Elétricas a Lítio
          </motion.p>
          <motion.p variants={item} className="eqp-body-lg text-eqp-fog max-w-2xl">
            Mais produtividade, menor custo operacional e alta disponibilidade para sua operação. Soluções premium para indústria pesada e logística.
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4">
            <a className="btn-primary text-center" href="#orcamento">Solicitar Orçamento</a>
            <a className="btn-secondary text-center" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Falar com um Especialista
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
