const stats = [
  { value: '18', label: 'Anos de Experiência', delay: 0, valueClass: 'text-[#0f172a]' },
  { value: '9001', label: 'ISO de Qualidade', delay: 100, valueClass: 'text-[#0f172a]' },
  { value: '24/7', label: 'Suporte Operacional', delay: 200, valueClass: 'text-[#0f172a]' },
  { value: '100%', label: 'Foco em Segurança', delay: 300, valueClass: 'text-yellow-500' },
]

export default function Stats() {
  return (
    <section className="py-12 bg-white relative z-30 -mt-12 mx-6 md:mx-auto max-w-6xl rounded-2xl shadow-2xl border border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {stats.map(({ value, label, delay, valueClass }) => (
            <div
              key={label}
              className="p-4 pt-8 md:pt-4 first:pt-4"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <span className={`block text-4xl font-extrabold mb-1 ${valueClass}`}>{value}</span>
              <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
