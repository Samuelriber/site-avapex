import { motion, useReducedMotion } from 'framer-motion'
import { Truck } from 'lucide-react'
import { WHATSAPP_TAIS } from '../../../constants/contact'
import { buildWhatsappHref } from '../utils/whatsapp'

const HERO_IMG = '/img/img/fundos/fundo-caminhao-avapex-emp.webp'

export default function EstrHero() {
  const reduceMotion = useReducedMotion()
  const whatsappHref = buildWhatsappHref(WHATSAPP_TAIS)

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: reduceMotion ? 0 : 0.1 } },
  }
  const item = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }

  return (
    <section className="relative bg-eqp-ink-deep overflow-hidden border-b border-eqp-seam py-16 md:py-28">
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center md:bg-[length:auto_1450px] md:bg-center -scale-x-100"
        style={{ backgroundImage: `url('${HERO_IMG}')` }}
        role="img"
        aria-label="Caminhão Mercedes-Benz Actros da Avapex Transportes em rodovia ao pôr do sol"
      ></div>
      <div className="absolute inset-0 bg-eqp-ink/55 md:bg-gradient-to-r md:from-eqp-ink md:via-eqp-ink/30 md:to-transparent z-10"></div>
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 md:px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-3xl space-y-6">
          <motion.div
            variants={item}
            className="eqp-badge-charge inline-flex items-center gap-2 bg-eqp-charge/20 border border-eqp-charge px-3 py-1 rounded-sm eqp-label-caps uppercase text-eqp-charge-bright"
          >
            <Truck size={16} strokeWidth={2} aria-hidden="true" />
            Frota pronta para operar
          </motion.div>
          <motion.h1 variants={item} className="eqp-h1 text-eqp-chalk">
            Equipamentos Estratégicos para a Sua Operação
          </motion.h1>
          <motion.p variants={item} className="eqp-body-lg text-eqp-fog max-w-2xl">
            Empilhadeiras e caminhões prontos para entrar em operação na sua logística, indústria ou mineração — com manutenção por nossa conta e suporte 24/7.
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
