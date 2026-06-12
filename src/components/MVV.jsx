const values = [
  'Segurança',
  'Ética',
  'Respeito',
  'Desenvolvimento profissional',
  'Melhoria contínua',
  'Credibilidade',
  'Compromisso com o Resultado',
]

const cards = [
  {
    title: 'Missão',
    delay: 0,
    content: (
      <p className="text-slate-600 leading-relaxed">
        Dirigir meios eficazes de transportes e locação de máquinas e equipamentos de forma sustentável,
        com segurança, rapidez, qualidade e respeito aos nossos clientes, em harmonia com o meio ambiente.
      </p>
    ),
  },
  {
    title: 'Visão',
    delay: 100,
    content: (
      <p className="text-slate-600 leading-relaxed">
        Ser reconhecido pela excelência nos serviços prestados no segmento de transportes e locação de
        máquinas e equipamentos, satisfazendo plenamente nossos clientes, com compromisso no resultado
        e responsabilidade socioambiental.
      </p>
    ),
  },
  {
    title: 'Valores',
    delay: 200,
    content: (
      <ul className="space-y-3 text-slate-600">
        {values.map((v) => (
          <li key={v} className="flex items-start gap-3">
            <span className="mt-1.5 inline-block w-2 h-2 bg-brand-yellow shrink-0" />
            <span>{v}</span>
          </li>
        ))}
      </ul>
    ),
  },
]

export default function MVV() {
  return (
    <section id="mvv" className="py-24 bg-brand-dust border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-brand-navy text-4xl font-extrabold mb-4">Visão, Missão e Valores</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Diretrizes que orientam nossa operação, conduta e compromisso com resultados.
          </p>
          <div className="w-16 h-1 bg-brand-yellow mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map(({ title, delay, content }) => (
            <div
              key={title}
              className="bg-brand-dust border border-slate-200 border-t-4 border-t-brand-yellow rounded-none overflow-hidden shadow-sm hover:shadow-lg transition-all"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="px-6 py-5 border-b border-slate-200">
                <h3 className="text-xl font-extrabold tracking-wide uppercase text-brand-navy">{title}</h3>
              </div>
              <div className="p-7">{content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
