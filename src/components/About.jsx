import { Award, Map } from 'lucide-react'

export default function About() {
  return (
    <>
      {/* About section */}
      <section id="quem-somos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div data-aos="fade-right">
              <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3 block">
                Nossa História
              </span>
              <h2 className="text-[#0f172a] text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Mais de 18 Anos de <br />Excelência Operacional
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
                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-yellow-500 mt-1 bg-yellow-50 p-2 rounded-lg">
                    <Award className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-sm">Certificação ISO 9001</h4>
                    <p className="text-xs text-slate-500 mt-1">Garantia de máxima qualidade e padronização operacional.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-yellow-500 mt-1 bg-yellow-50 p-2 rounded-lg">
                    <Map className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-sm">Cobertura Estratégica</h4>
                    <p className="text-xs text-slate-500 mt-1">Bases em MG, SP e RJ para pronto atendimento.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — image with badge */}
            <div data-aos="fade-left" className="relative mt-10 lg:mt-0 lg:h-full min-h-[400px] md:min-h-[500px]">
              <div
                className="bg-[#f8fafc] rounded-[2rem] w-full relative shadow-lg border border-slate-200"
                style={{ minHeight: 400 }}
              >
                <div className="absolute inset-0 bg-yellow-400 rounded-[2rem] transform rotate-2 opacity-30 -z-10" />
                <img
                  src="img/caminhão.webp"
                  width="1360"
                  height="907"
                  alt="Foto Institucional de Caminhão Avapex Transportes"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover rounded-[2rem] z-10"
                />
                <div className="absolute bottom-4 left-4 md:bottom-8 md:-left-8 bg-white py-5 px-8 rounded-2xl flex flex-col items-center justify-center z-20 shadow-2xl border border-slate-100">
                  <span className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-none">18</span>
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-2 text-center">
                    Anos de<br />Experiência
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seday Group synergy section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2 text-[#0f172a]">
              Parte de um Grupo <span style={{ color: '#2B6CB0' }}>SEDAY</span>
            </h3>
            <p className="text-slate-500">Sinergia estratégica para garantir capacidade de atendimento completa.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16" data-aos="zoom-in">
            <div className="text-center group hover:scale-105 transition-transform">
              <img
                src="img/AVAPEX OFICIAL 01.png"
                width="3182"
                height="900"
                alt="Logotipo Avapex"
                loading="lazy"
                decoding="async"
                className="h-14 w-auto mx-auto mb-3 object-contain"
              />
            </div>
            <div className="hidden md:block h-16 w-[1px] bg-slate-200" />
            <div className="text-center group hover:scale-105 transition-transform">
              <img
                src="img/SEDAY.PADRÃO02transparente.png"
                width="767"
                height="376"
                alt="Logotipo Seday Equipamentos"
                loading="lazy"
                decoding="async"
                className="h-16 w-auto mx-auto mb-3 object-contain"
              />
            </div>
            <div className="hidden md:block h-16 w-[1px] bg-slate-200" />
            <div className="text-center group hover:scale-105 transition-transform">
              <a
                href="https://www.innomach.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visitar site da Innomach"
              >
                <img
                  src="img/INNOMACH EQUIPAMENTO oficial 01.png"
                  width="2412"
                  height="548"
                  alt="Logotipo Innomach Máquinas e Peças"
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-auto mx-auto mb-3 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
