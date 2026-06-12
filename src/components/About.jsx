import { Award, Map } from 'lucide-react'
import { COMPANY_YEARS_EXPERIENCE } from '../constants/company'

export default function About() {
  return (
    <section id="quem-somos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div data-aos="fade-right">
              <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3 block">
                Nossa História
              </span>
              <h2 className="text-[#0f172a] text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Mais de {COMPANY_YEARS_EXPERIENCE} Anos de <br />Excelência Operacional
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-4">
                A <strong>Avapex Transportes</strong> consolida-se pela credibilidade e forte compromisso com
                os resultados de cada cliente. Somos especialistas em transporte rodoviário, movimentação de
                cargas pesadas e locação de máquinas e equipamentos (oferecidos com ou sem mão de obra),
                atendendo principalmente aos exigentes setores da mineração, indústria e ferrovia.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Para otimizar a sua cadeia de suprimentos, contamos com uma capilaridade estratégica: nossa
                matriz está localizada às margens da BR-040 em Conselheiro Lafaiete/MG. Possuímos também um
                posto avançado em Belo Horizonte/MG, filiais operacionais nos estados de São Paulo e Rio de
                Janeiro, além de unidades táticas de apoio em Juatuba/MG e Ipatinga/MG.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 bg-white p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-yellow-500 mt-1 bg-yellow-50 p-2 rounded-sm">
                    <Award className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] text-sm">Certificação ISO 9001</h3>
                    <p className="text-xs text-slate-500 mt-1">Garantia de máxima qualidade e padronização operacional.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-yellow-500 mt-1 bg-yellow-50 p-2 rounded-sm">
                    <Map className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] text-sm">Cobertura Estratégica</h3>
                    <p className="text-xs text-slate-500 mt-1">Bases em MG, SP e RJ para pronto atendimento.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — polaroid */}
            <div data-aos="fade-left" className="flex justify-center items-center mt-10 lg:mt-0">
              <div className="bg-white p-3 pb-16 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-md">
                <div className="overflow-hidden w-full h-[320px] md:h-[380px]">
                  <img
                    src="/img/img/Logos/foto-caminhao-avapex.svg"
                    alt="Caminhão Avapex Transportes — frota própria"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="pt-4 flex items-center justify-between px-2">
                  <span className="text-slate-400 text-xs font-light tracking-widest uppercase">Avapex Transportes</span>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-extrabold text-[#0f172a] leading-none">{COMPANY_YEARS_EXPERIENCE}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Anos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
