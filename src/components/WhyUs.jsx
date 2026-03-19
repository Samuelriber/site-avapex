import { Focus, BadgeDollarSign, ClipboardCheck, Handshake } from 'lucide-react'

const reasons = [
  {
    icon: Focus,
    title: 'Foco no seu core business',
    description:
      'Ao confiar a operação logística a um parceiro especializado, sua empresa direciona energia e recursos para o que realmente gera valor: produção, vendas e crescimento do negócio.',
    delay: 0,
  },
  {
    icon: BadgeDollarSign,
    title: 'Redução e previsibilidade de custos',
    description:
      'Eliminação de imobilização em frota e equipamentos, redução de custos com manutenção, gestão de pessoas e compliance, estrutura de custos clara e contratualizada.',
    delay: 100,
  },
  {
    icon: ClipboardCheck,
    title: 'Gestão especializada',
    description:
      'Profissionais treinados e certificados, controle rigoroso de manutenção preventiva e corretiva, gestão de indicadores de desempenho (KPIs) e foco em segurança operacional.',
    delay: 200,
  },
  {
    icon: Handshake,
    title: 'Parceria estratégica de longo prazo',
    description:
      'Nosso compromisso vai além da execução do serviço. Atuamos com transparência, previsibilidade contratual e construção conjunta de soluções.',
    delay: 300,
  },
]

export default function WhyUs() {
  return (
    <section id="por-que-avapex" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0f172a] text-3xl md:text-4xl font-extrabold mb-4">
            Por que terceirizar a sua logística conosco?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Terceirizar a logística não é apenas transferir uma operação: é transformar custo fixo em
            eficiência operacional, previsibilidade financeira e foco estratégico.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map(({ icon: Icon, title, description, delay }) => (
            <div
              key={title}
              className="bg-white border border-slate-200 shadow-sm p-8 rounded-2xl hover:shadow-lg transition-all"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="text-yellow-500 mb-6 bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-[#0f172a] text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
