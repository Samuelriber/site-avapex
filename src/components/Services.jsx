export default function Services() {
  return (
    <>
      {/* ── Nossos Serviços ─────────────────────────────────── */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-[#0f172a] text-4xl font-extrabold mb-4">Nossos Serviços</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="0">
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-yellow-100">
                <i data-lucide="package" className="w-6 h-6 text-[#0f172a]" aria-hidden="true"></i>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0f172a]">Transporte Rodoviário</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Transporte rodoviário de carga fechada em todo território nacional com foco na região sudeste.</p>
            </div>

            <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-yellow-100">
                <i data-lucide="network" className="w-6 h-6 text-[#0f172a]" aria-hidden="true"></i>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0f172a]">Intralogística</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Transporte e movimentação interna com equipamentos móveis principalmente empilhadeiras.</p>
            </div>

            <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-yellow-100">
                <i data-lucide="settings" className="w-6 h-6 text-[#0f172a]" aria-hidden="true"></i>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0f172a]">Locação de Equipamentos</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Frota completa de veículos pesados e máquinas da linha amarela.</p>
            </div>

            <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-yellow-100">
                <i data-lucide="arrow-up-from-line" className="w-6 h-6 text-[#0f172a]" aria-hidden="true"></i>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0f172a]">Içamento de Cargas</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Serviços de movimentação e içamento de carga com caminhões Guindauto e manipuladores.</p>
            </div>

            <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-yellow-100">
                <i data-lucide="fuel" className="w-6 h-6 text-[#0f172a]" aria-hidden="true"></i>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0f172a]">Apoio Logístico</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Caminhão Comboio para abastecimento rápido e suporte tático de frotas em campo.</p>
            </div>

            <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay="500">
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-yellow-100">
                <i data-lucide="truck" className="w-6 h-6 text-[#0f172a]" aria-hidden="true"></i>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#0f172a]">Cargas Especiais</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Transporte de cargas especiais e dimensionadas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Por que terceirizar ──────────────────────────────── */}
      <section id="por-que-avapex" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-[#0f172a] text-3xl md:text-4xl font-extrabold mb-4">Por que terceirizar a sua logística conosco?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Terceirizar a logística não é apenas transferir uma operação: é transformar custo fixo em eficiência operacional, previsibilidade financeira e foco estratégico.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white border border-slate-200 shadow-sm p-8 rounded-2xl hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="0">
              <div className="text-yellow-500 mb-6 bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center">
                <i data-lucide="focus" className="w-8 h-8" aria-hidden="true"></i>
              </div>
              <h3 className="text-[#0f172a] text-xl font-bold mb-3">Foco no seu core business</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Ao confiar a operação logística a um parceiro especializado, sua empresa direciona energia e recursos para o que realmente gera valor: produção, vendas e crescimento do negócio.</p>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm p-8 rounded-2xl hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="100">
              <div className="text-yellow-500 mb-6 bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center">
                <i data-lucide="badge-dollar-sign" className="w-8 h-8" aria-hidden="true"></i>
              </div>
              <h3 className="text-[#0f172a] text-xl font-bold mb-3">Redução e previsibilidade de custos</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Eliminação de imobilização em frota e equipamentos, redução de custos com manutenção, gestão de pessoas e compliance, estrutura de custos clara e contratualizada.</p>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm p-8 rounded-2xl hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="200">
              <div className="text-yellow-500 mb-6 bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center">
                <i data-lucide="clipboard-check" className="w-8 h-8" aria-hidden="true"></i>
              </div>
              <h3 className="text-[#0f172a] text-xl font-boldi mb-3">Gestão especializada</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Profissionais treinados e certificados, controle rigoroso de manutenção preventiva e corretiva, gestão de indicadores de desempenho (KPIs) e foco em segurança operacional.</p>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm p-8 rounded-2xl hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="300">
              <div className="text-yellow-500 mb-6 bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center">
                <i data-lucide="handshake" className="w-8 h-8" aria-hidden="true"></i>
              </div>
              <h3 className="text-[#0f172a] text-xl font-bold mb-3">Parceria estratégica de longo prazo</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Nosso compromisso vai além da execução do serviço. Atuamos com transparência, previsibilidade contratual e construção conjunta de soluções.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipamentos ────────────────────────────────────── */}
      <section id="equipamentos" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-[#0f172a] text-4xl font-extrabold mb-4">A Nossa Frota</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Equipamentos atualizados para garantir alta performance e segurança no canteiro de obras ou na estrada.</p>
          </div>

          {/* Frota Rodoviária */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4" data-aos="fade-right">
              <div className="bg-yellow-400 p-3 rounded-xl text-[#0f172a]">
                <i data-lucide="truck" className="w-7 h-7" aria-hidden="true"></i>
              </div>
              <h3 className="text-3xl font-extrabold text-[#0f172a]">Frota Rodoviária</h3>
            </div>i

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                ['./Equipamentos/Basculantes Traçados.png',               'Locação de Caminhão Basculante Traçado',                  'Caminhão Basculante',              0],
                ['./Equipamentos/Caminhões Munck.jpg',                    'Locação de Caminhão Guindauto Munck',                     'Caminhão Guindauto',               100],
                ['./Equipamentos/Caminhões Comboio.png',                  'Locação de Caminhão Comboio para Abastecimento',          'Caminhão Comboio/Abastecedor',     200],
                ['./Equipamentos/Caminhões Pipa.png',                     'Locação de Caminhão Pipa',                                'Caminhão Pipa',                    300],
                ['./Equipamentos/Caminhões ¾ com cabine suplementar.png', 'Locação de Caminhão 3/4 Carroceria com Cabine Suplementar','Caminhão Carroceria',             400],
                ['./Equipamentos/poliguidantes.png',                      'Locação de Caminhão Poliguindaste Telescópico',           'Caminhão Poliguindaste Telescópico',400],
                ['./Equipamentos/Roll on Roll of.png',                    'Locação de Caminhão Roll on Roll off',                    'Roll on Roll off',                 400],
                ['./Equipamentos/Carretas Prancha.png',                   'Transporte com Conjunto Carreta Prancha',                 'Conjunto Carreta Prancha',         600],
                ['./Equipamentos/Basculantes carreta.png',                'Transporte com Conjunto Carreta Basculante',              'Conjunto Carreta Basculante',      400],
                ['./Equipamentos/Carretas Carga Seca.jpg',                'Transporte Especial com Carreta Carga Seca',              'Conjunto Carreta Carga Seca',      700],
                ['./Equipamentos/carreta silo.png',                       'Transporte com Conjunto Carreta Silo',                    'Conjunto Carreta Silo',            700],
              ].map(([src, alt, label, delay]) => (
                <article key={src} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay={delay}>
                  <div className="h-56 overflow-hidden bg-white flex items-center justify-center p-4">
                    <img src={src} alt={alt} width="224" height="224" loading="lazy" decoding="async" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5 border-t border-slate-100">
                    <h4 className="text-md font-bold text-[#0f172a] text-center">{label}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Linha Amarela */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4" data-aos="fade-right">
              <div className="bg-yellow-400 p-3 rounded-xl text-[#0f172a]">
                <i data-lucide="boxes" className="w-7 h-7" aria-hidden="true"></i>
              </div>
              <h3 className="text-3xl font-extrabold text-[#0f172a]">Linha Amarela &amp; Movimentação</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {[
                ['./Equipamentos/Empilhadeiras industriais.png',    'Locação de Empilhadeira à Combustão',         'Empilhadeira à Combustão', 0],
                ['./Equipamentos/Empilhadeira eletrica.webp',       'Locação de Empilhadeira Elétrica',            'Empilhadeira Elétrica',    0],
                ['./Equipamentos/Transpaleteiras.png',              'Locação de Transpaleteiras Industriais',      'Transpaleteiras',          100],
                ['./Equipamentos/Empilhadeira Retráteis.png',       'Locação de Empilhadeira Retrátil',            'Empilhadeira Retrátil',    0],
                ['./Equipamentos/Big Truck.png',                    'Locação de Empilhadeira Pesada Big Truck',    'Empilhadeira Big Truck',   100],
                ['./Equipamentos/Tratores de esteira e de pneus.jpg','Locação de Trator de Esteira',               'Trator de Esteira',        200],
                ['./Equipamentos/Trator de Pneu.png',               'Locação de Trator de Pneu',                  'Trator de Pneu',           200],
                ['./Equipamentos/Carregadeiras de grande porte.png','Locação de Carregadeira de Grande Porte',     'Carregadeira',             300],
                ['./Equipamentos/Escavadeiras Hidráulicas.png',     'Locação de Escavadeira Hidráulica',           'Escavadeira Hidráulica',   400],
                ['./Equipamentos/Retroescavadeiras cabinadas.png',  'Locação de Retroescavadeira',                 'Retroescavadeira',         500],
                ['./Equipamentos/Manipuladores Telescópicos.png',   'Locação de Manipulador Telescópico',          'Manipulador Telescópico',  600],
              ].map(([src, alt, label, delay]) => (
                <article key={src} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group" data-aos="fade-up" data-aos-delay={delay}>
                  <div className="h-56 overflow-hidden bg-white flex items-center justify-center p-4">
                    <img src={src} alt={alt} width="224" height="224" loading="lazy" decoding="async" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5 border-t border-slate-100">
                    <h4 className="text-md font-bold text-[#0f172a] text-center">{label}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MVV ─────────────────────────────────────────────── */}
      <section id="mvv" className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-[#0f172a] text-4xl font-extrabold mb-4">Visão, Missão e Valores</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Diretrizes que orientam nossa operação, conduta e compromisso com resultados.</p>
            <div className="w-16 h-1 bg-yellow-400 mx-auto rounded mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="0">
              <div className="bg-[#0f172a] text-white px-6 py-4 border-b border-slate-700">
                <h3 className="text-xl font-extrabold tracking-wide uppercase">Missão</h3>
              </div>
              <div className="p-7">
                <p className="text-slate-600 leading-relaxed">Dirigir meios eficazes de transportes e locação de máquinas e equipamentos de forma sustentável, com segurança, rapidez, qualidade e respeito aos nossos clientes, em harmonia com o meio ambiente.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-[#0f172a] text-white px-6 py-4 border-b border-slate-700">
                <h3 className="text-xl font-extrabold tracking-wide uppercase">Visão</h3>
              </div>
              <div className="p-7">
                <p className="text-slate-600 leading-relaxed">Ser reconhecido pela excelência nos serviços prestados no segmento de transportes e locação de máquinas e equipamentos, satisfazendo plenamente nossos clientes, com compromisso no resultado e responsabilidade socioambiental.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-[#0f172a] text-white px-6 py-4 border-b border-slate-700">
                <h3 className="text-xl font-extrabold tracking-wide uppercase">Valores</h3>
              </div>
              <div className="p-7">
                <ul className="space-y-3 text-slate-600">
                  {['Segurança','Ética','Respeito ao cliente','Desenvolvimento profissional','Melhoria contínua','Credibilidade','Compromisso com o Resultado'].map(v => (
                    <li key={v} className="flex items-start gap-3">
                      <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
