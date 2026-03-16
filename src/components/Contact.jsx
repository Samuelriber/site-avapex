export default function Contact() {
  return (
    <>
      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-[#0f172a] text-4xl font-extrabold mb-4">Dúvidas Frequentes</h2>
            <p className="text-slate-600">Respostas rápidas para agilizar o planejamento da sua operação.</p>
          </div>

          <div className="space-y-4" data-aos="fade-up">
            <details className="group border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#0f172a] hover:bg-slate-50 transition-colors">
                Como funciona a locação de máquinas pesadas?
                <span className="transition group-open:rotate-180">
                  <i data-lucide="chevron-down" className="text-yellow-500" aria-hidden="true"></i>
                </span>
              </summary>
              <div className="text-slate-600 p-6 pt-0 leading-relaxed bg-white border-t border-slate-100 mt-2">
                A Avapex oferece modelos flexíveis de contrato. Podemos fornecer apenas o equipamento (dry rent) ou a solução completa com operadores altamente capacitados, combustível e manutenção inclusos.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#0f172a] hover:bg-slate-50 transition-colors">
                Em quais regiões a Avapex atua?
                <span className="transition group-open:rotate-180">
                  <i data-lucide="chevron-down" className="text-yellow-500" aria-hidden="true"></i>
                </span>
              </summary>
              <div className="text-slate-600 p-6 pt-0 leading-relaxed bg-white border-t border-slate-100 mt-2">
                Nossa matriz está localizada estrategicamente em Conselheiro Lafaiete/MG, mas temos estrutura e capilaridade logística para atuar em projetos nos principais pólos de mineração e siderurgia de Minas Gerais, São Paulo, Rio de Janeiro e estados adjacentes.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#0f172a] hover:bg-slate-50 transition-colors">
                A empresa possui certificações para atuar em áreas de risco?
                <span className="transition group-open:rotate-180">
                  <i data-lucide="chevron-down" className="text-yellow-500" aria-hidden="true"></i>
                </span>
              </summary>
              <div className="text-slate-600 p-6 pt-0 leading-relaxed bg-white border-t border-slate-100 mt-2">
                Sim. Nossos processos e nossa equipe seguem rigorosamente os padrões de compliance e SSMA (Saúde, Segurança e Meio Ambiente) exigidos por grandes empresas do setor, além de possuirmos a certificação ISO 9001.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── Orçamento ────────────────────────────────────────── */}
      <section id="orcamento" className="py-24 bg-[#0B1121] text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div data-aos="fade-right" className="flex flex-col h-full">
              <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-3 block">CONTATO DIRETO</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Receba uma Proposta Comercial</h2>
              <p className="text-slate-300 mb-8 text-base leading-relaxed">Nossa equipe de engenharia logística está pronta para analisar sua demanda e desenhar a operação com o melhor custo-benefício.</p>

              <div className="space-y-4 bg-[#141E30] p-6 rounded-2xl border border-slate-700/50 mb-8">

                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-xl text-[#0f172a] shadow-md flex-shrink-0">
                    <i data-lucide="phone" className="w-6 h-6" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Central de Atendimento</p>
                    <p className="text-yellow-400 text-lg font-bold">(31) 98465-7066</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#2A3447] p-3 rounded-xl text-yellow-400 shadow-md flex-shrink-0">
                    <i data-lucide="mail" className="w-6 h-6" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">E-mail Corporativo</p>
                    <p className="text-slate-400 text-sm">comercial@avapex.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#2A3447] p-3 rounded-xl text-yellow-400 shadow-md flex-shrink-0">
                    <i data-lucide="map-pin" className="w-6 h-6" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Base Operacional</p>
                    <p className="text-slate-400 text-sm italic">Rodovia BR-040, 22750, Barreira - Conselheiro Lafaiete/MG</p>
                    <a href="https://maps.google.com/maps/contrib/100608184481915675973" target="_blank" rel="noopener noreferrer" className="text-yellow-400 text-xs hover:underline mt-1 block">Abrir rota no Google Maps</a>
                  </div>
                </div>

              </div>

              <div className="rounded-2xl overflow-hidden h-64 border border-slate-700 shadow-lg relative w-full mt-auto">
                <iframe
                  className="w-full h-full"
                  title="Mapa Localização Avapex Transportes"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.215447104332!2d-43.77447492474447!3d-20.62770008092283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ff88f8d6f193b%3A0xfa249b1c87aee7dd!2sAvapex%20Transportes%20Ltda.!5e0!3m2!1spt-BR!2sbr!4v1716300000000!5m2!1spt-BR!2sbr"
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-white text-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl relative" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-6 text-[#0f172a]">Solicite um Orçamento</h3>
              <form action="mailto:comercial@avapex.com.br" method="POST" encType="text/plain" className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nome do Responsável *</label>
                    <input type="text" name="nome" required className="w-full p-4 rounded-xl border border-slate-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Empresa *</label>
                    <input type="text" name="empresa" required className="w-full p-4 rounded-xl border border-slate-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all bg-slate-50" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">E-mail Profissional *</label>
                    <input type="email" name="email" required className="w-full p-4 rounded-xl border border-slate-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Telefone / WhatsApp *</label>
                    <input type="tel" name="telefone" required className="w-full p-4 rounded-xl border border-slate-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all bg-slate-50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Em qual área podemos ajudar? *</label>
                  <select name="servico" defaultValue="" className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all font-medium">
                    <option value="" disabled>Selecione uma opção...</option>
                    <option>Locação de Máquinas Linha Amarela</option>
                    <option>Transporte Rodoviário / Pesado</option>
                    <option>Operação de Intralogística</option>
                    <option>Movimentação de Carga Pesada</option>
                    <option>Outra Necessidade</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Detalhes da Demanda</label>
                  <textarea name="mensagem" rows="3" className="w-full p-4 rounded-xl border border-slate-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all bg-slate-50 resize-none" placeholder="Descreva brevemente sua necessidade..."></textarea>
                </div>

                <button type="submit" className="w-full bg-yellow-400 text-[#0f172a] font-extrabold py-5 rounded-xl shadow-lg hover:bg-yellow-500 transition-all flex items-center justify-center gap-3 text-lg group">
                  Enviar Solicitação <i data-lucide="send" className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── Grupo SEDAY ─────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2 text-[#0f172a]">Parte de um Grupo <span style={{ color: '#2B6CB0' }}>SEDAY</span></h3>
            <p className="text-slate-500">Sinergia estratégica para garantir capacidade de atendimento completa.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16" data-aos="zoom-in">
            <div className="text-center group hover:scale-105 transition-transform">
              <img src="./img/AVAPEX OFICIAL 01.png" width="3182" height="900" alt="Logotipo Avapex" loading="lazy" decoding="async" className="h-14 w-auto mx-auto mb-3 object-contain" />
            </div>
            <div className="hidden md:block h-16 w-[1px] bg-slate-200"></div>
            <div className="text-center group hover:scale-105 transition-transform">
              <img src="./img/SEDAY.PADRÃO02transparente.png" width="767" height="376" alt="Logotipo Seday Equipamentos" loading="lazy" decoding="async" className="h-16 w-auto mx-auto mb-3 object-contain" />
            </div>
            <div className="hidden md:block h-16 w-[1px] bg-slate-200"></div>
            <div className="text-center group hover:scale-105 transition-transform">
              <a href="https://www.innomach.com.br/" target="_blank" rel="noopener noreferrer" title="Visitar site da Innomach">
                <img src="./img/INNOMACH EQUIPAMENTO oficial 01.png" width="2412" height="548" alt="Logotipo Innomach Máquinas e Peças" loading="lazy" decoding="async" className="h-12 w-auto mx-auto mb-3 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
