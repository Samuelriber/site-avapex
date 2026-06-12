import { COMPANY_YEARS_EXPERIENCE } from '../constants/company'

const stats = [
  { value: String(COMPANY_YEARS_EXPERIENCE), label: 'Anos de Experiência', delay: 0 },
  { value: '9001', label: 'ISO de Qualidade',      delay: 100 },
  { value: '24/7', label: 'Suporte Operacional',   delay: 200 },
  { value: '100%', label: 'Foco em Segurança',     delay: 300 },
]

export default function Stats() {
  return (
    <section className="py-10 bg-brand-steel border-t-4 border-brand-yellow w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {stats.map(({ value, label, delay }, index) => (
            <div
              key={label}
              data-aos="fade-up"
              data-aos-delay={delay}
              className={`px-6 py-4 text-center ${
                index < stats.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-white/10'
                  : ''
              }`}
            >
              <span className="block font-barlow font-bold text-4xl text-brand-yellow mb-1 leading-none">
                {value}
              </span>
              <span className="font-dm font-normal text-brand-iron uppercase text-xs tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
