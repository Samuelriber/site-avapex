import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Como funciona a locação de máquinas pesadas?',
    answer:
      'A Avapex oferece modelos flexíveis de contrato. Podemos fornecer apenas o equipamento (dry rent) ou a solução completa com operadores altamente capacitados, combustível e manutenção inclusos.',
  },
  {
    question: 'Em quais regiões a Avapex atua?',
    answer:
      'Nossa matriz está localizada estrategicamente em Conselheiro Lafaiete/MG, mas temos estrutura e capilaridade logística para atuar em projetos em todo território nacional com foco na região sudeste.',
  },
  {
    question: 'A empresa possui certificações para atuar em áreas de risco?',
    answer:
      'Sim. Além da certificação ISO 9001:2015, nossos processos e nossa equipe seguem rigorosamente os padrões de compliance e SSMA (Saúde, Segurança e Meio Ambiente) exigidos por grandes empresas como Vale, Usiminas e MRS.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0f172a] text-4xl font-extrabold mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-600">Respostas rápidas para agilizar o planejamento da sua operação.</p>
        </div>

        <div className="space-y-4" data-aos="fade-up">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group border border-slate-200 rounded-xl bg-slate-50 overflow-hidden shadow-sm"
            >
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#0f172a] hover:bg-slate-100 transition-colors">
                {question}
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="text-yellow-500" aria-hidden="true" />
                </span>
              </summary>
              <div className="text-slate-600 p-6 pt-0 leading-relaxed bg-slate-50 border-t border-slate-100 mt-2">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
