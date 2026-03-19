import { Truck, Boxes } from 'lucide-react'

const roadFleet = [
  { src: 'Equipamentos/Basculantes Traçados.png', alt: 'Locação de Caminhão Basculante Traçado', label: 'Caminhão Basculante', delay: 0 },
  { src: 'Equipamentos/Caminhões Munck.jpg', alt: 'Locação de Caminhão Guindauto Munck', label: 'Caminhão Guindauto', delay: 100 },
  { src: 'Equipamentos/Caminhões Comboio.png', alt: 'Locação de Caminhão Comboio para Abastecimento', label: 'Caminhão Comboio/Abastecedor', delay: 200 },
  { src: 'Equipamentos/Caminhões Pipa.png', alt: 'Locação de Caminhão Pipa', label: 'Caminhão Pipa', delay: 300 },
  { src: 'Equipamentos/Caminhões ¾ com cabine suplementar.png', alt: 'Locação de Caminhão 3/4 Carroceria com Cabine Suplementar', label: 'Caminhão Carroceria', delay: 400 },
  { src: 'Equipamentos/poliguidantes.png', alt: 'Locação de Caminhão Poliguindaste Telescópico', label: 'Caminhão Poliguindaste Telescópico', delay: 400 },
  { src: 'Equipamentos/Roll on Roll of.png', alt: 'Locação de Caminhão Roll on Roll off', label: 'Roll on Roll off', delay: 400 },
  { src: 'Equipamentos/Carretas Prancha.png', alt: 'Transporte com Conjunto Carreta Prancha', label: 'Conjunto Carreta Prancha', delay: 600 },
  { src: 'Equipamentos/Basculantes carreta.png', alt: 'Transporte com Conjunto Carreta Basculante', label: 'Conjunto Carreta Basculante', delay: 400 },
  { src: 'Equipamentos/Carretas Carga Seca.jpg', alt: 'Transporte Especial com Carreta Carga Seca', label: 'Conjunto Carreta Carga Seca', delay: 700 },
  { src: 'Equipamentos/carreta silo.png', alt: 'Transporte com Conjunto Carreta Silo', label: 'Conjunto Carreta Silo', delay: 700 },
]

const yellowLineFleet = [
  { src: 'Equipamentos/Empilhadeiras industriais.png', alt: 'Locação de Empilhadeira à Combustão', label: 'Empilhadeira à Combustão', delay: 0 },
  { src: 'Equipamentos/Empilhadeira eletrica.webp', alt: 'Locação de Empilhadeira Elétrica', label: 'Empilhadeira Elétrica', delay: 0 },
  { src: 'Equipamentos/Transpaleteiras.png', alt: 'Locação de Transpaleteiras Industriais', label: 'Transpaleteiras', delay: 100 },
  { src: 'Equipamentos/Empilhadeira Retráteis.png', alt: 'Locação de Empilhadeira Retrátil', label: 'Empilhadeira Retrátil', delay: 0 },
  { src: 'Equipamentos/Big Truck.png', alt: 'Locação de Empilhadeira Pesada Big Truck', label: 'Empilhadeira Big Truck', delay: 100 },
  { src: 'Equipamentos/Tratores de esteira e de pneus.jpg', alt: 'Locação de Trator de Esteira', label: 'Trator de Esteira', delay: 200 },
  { src: 'Equipamentos/Trator de Pneu.png', alt: 'Locação de Trator de Pneu', label: 'Trator de Pneu', delay: 200 },
  { src: 'Equipamentos/Carregadeiras de grande porte.png', alt: 'Locação de Carregadeira de Grande Porte', label: 'Carregadeira', delay: 300 },
  { src: 'Equipamentos/Escavadeiras Hidráulicas.png', alt: 'Locação de Escavadeira Hidráulica', label: 'Escavadeira Hidráulica', delay: 400 },
  { src: 'Equipamentos/Retroescavadeiras cabinadas.png', alt: 'Locação de Retroescavadeira', label: 'Retroescavadeira', delay: 500 },
  { src: 'Equipamentos/Manipuladores Telescópicos.png', alt: 'Locação de Manipulador Telescópico', label: 'Manipulador Telescópico', delay: 600 },
]

function EquipmentCard({ src, alt, label, delay }) {
  return (
    <article
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="h-56 overflow-hidden bg-white flex items-center justify-center p-4">
        <img
          src={src}
          alt={alt}
          width="224"
          height="224"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 border-t border-slate-100">
        <h4 className="text-md font-bold text-[#0f172a] text-center">{label}</h4>
      </div>
    </article>
  )
}

export default function Fleet() {
  return (
    <section id="equipamentos" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0f172a] text-4xl font-extrabold mb-4">A Nossa Frota</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Equipamentos atualizados para garantir alta performance e segurança no canteiro de obras ou na estrada.
          </p>
        </div>

        {/* Frota Rodoviária */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4" data-aos="fade-right">
            <div className="bg-yellow-400 p-3 rounded-xl text-[#0f172a]">
              <Truck className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#0f172a]">Frota Rodoviária</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {roadFleet.map((item) => (
              <EquipmentCard key={item.src} {...item} />
            ))}
          </div>
        </div>

        {/* Linha Amarela & Movimentação */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4" data-aos="fade-right">
            <div className="bg-yellow-400 p-3 rounded-xl text-[#0f172a]">
              <Boxes className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#0f172a]">Linha Amarela &amp; Movimentação</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {yellowLineFleet.map((item) => (
              <EquipmentCard key={item.src} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
