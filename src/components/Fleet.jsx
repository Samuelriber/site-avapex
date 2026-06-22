import { useState } from 'react'
import { Truck, Boxes, ImageOff } from 'lucide-react'

const roadFleet = [
  { src: 'Equipamentos/Veículos e Carretas/Caminhão Basculante.webp',                 alt: 'Locação de Caminhão Basculante Traçado',                    label: 'Caminhão Basculante'                },
  { src: 'Equipamentos/Veículos e Carretas/Caminhão Guindauto.webp',                  alt: 'Locação de Caminhão Guindauto Munck',                       label: 'Caminhão Guindauto'                 },
  { src: 'Equipamentos/Veículos e Carretas/Caminhão Comboio-Abastecedor.webp',        alt: 'Locação de Caminhão Comboio para Abastecimento',            label: 'Caminhão Comboio/Abastecedor'       },
  { src: 'Equipamentos/Veículos e Carretas/Caminhão Pipa.webp',                       alt: 'Locação de Caminhão Pipa',                                  label: 'Caminhão Pipa'                      },
  { src: 'Equipamentos/Veículos e Carretas/Caminhão Carroceria.webp',                 alt: 'Locação de Caminhão 3/4 Carroceria com Cabine Suplementar', label: 'Caminhão Carroceria'                },
  { src: 'Equipamentos/Veículos e Carretas/Caminhão Poliguindaste Telescópico.webp',  alt: 'Locação de Caminhão Poliguindaste Telescópico',             label: 'Caminhão Poliguindaste Telescópico' },
  { src: 'Equipamentos/Veículos e Carretas/Roll on Roll off.webp',                    alt: 'Locação de Caminhão Roll on Roll off',                      label: 'Roll on Roll off'                   },
  { src: 'Equipamentos/Veículos e Carretas/Conjunto Carreta Prancha.webp',            alt: 'Transporte com Conjunto Carreta Prancha',                   label: 'Conjunto Carreta Prancha'           },
  { src: 'Equipamentos/Veículos e Carretas/Conjunto Carreta Basculante.webp',         alt: 'Transporte com Conjunto Carreta Basculante',                label: 'Conjunto Carreta Basculante'        },
  { src: 'Equipamentos/Veículos e Carretas/Conjunto Carreta Carga Seca.webp',         alt: 'Transporte Especial com Carreta Carga Seca',                label: 'Conjunto Carreta Carga Seca'        },
  { src: 'Equipamentos/Veículos e Carretas/Conjunto Carreta Silo.webp',               alt: 'Transporte com Conjunto Carreta Silo',                      label: 'Conjunto Carreta Silo'              },
]

const yellowLineFleet = [
  { src: 'Equipamentos/Linha Amarela & Movimentação/Empilhadeira à Combustão.webp',  alt: 'Locação de Empilhadeira à Combustão',           label: 'Empilhadeira à Combustão'  },
  { src: 'Equipamentos/Linha Amarela & Movimentação/Empilhadeira Elétrica.webp',     alt: 'Locação de Empilhadeira Elétrica',              label: 'Empilhadeira Elétrica'     },
  { src: 'Equipamentos/Linha Amarela & Movimentação/Transpaleteiras.webp',           alt: 'Locação de Transpaleteiras Industriais',        label: 'Transpaleteiras'           },
  { src: 'Equipamentos/Linha Amarela & Movimentação/Empilhadeira Retrátil.webp',     alt: 'Locação de Empilhadeira Retrátil',              label: 'Empilhadeira Retrátil'     },
  { src: 'Equipamentos/Linha Amarela & Movimentação/Empilhadeira Big Truck.webp',    alt: 'Locação de Empilhadeira Pesada Big Truck',      label: 'Empilhadeira Big Truck'    },
  { src: 'Equipamentos/Linha Amarela & Movimentação/Trator de Esteira.webp',         alt: 'Locação de Trator de Esteira',                  label: 'Trator de Esteira'         },
  { src: 'Equipamentos/Linha Amarela & Movimentação/Trator de Pneu.webp',            alt: 'Locação de Trator de Pneu',                     label: 'Trator de Pneu'            },
  { src: 'Equipamentos/Linha Amarela & Movimentação/Carregadeira.webp',              alt: 'Locação de Carregadeira de Grande Porte',       label: 'Carregadeira'              },
  { src: 'Equipamentos/Linha Amarela & Movimentação/Escavadeira Hidráulica.webp',    alt: 'Locação de Escavadeira Hidráulica',             label: 'Escavadeira Hidráulica'    },
  { src: 'Equipamentos/Linha Amarela & Movimentação/Retroescavadeira.webp',          alt: 'Locação de Retroescavadeira',                   label: 'Retroescavadeira'          },
  { src: 'Equipamentos/Linha Amarela & Movimentação/Manipulador Telescópico.webp',   alt: 'Locação de Manipulador Telescópico',            label: 'Manipulador Telescópico'   },
]

function EquipmentCard({ src, alt, label, delay = 0 }) {
  const [imgError, setImgError] = useState(false)

  return (
    <a
      href="#orcamento"
      className="bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-yellow transition-all group cursor-pointer hidden md:block"
      data-aos="fade-up"
      data-aos-delay={delay}
      aria-label={`Solicitar orçamento para ${label}`}
    >
      <div className="h-56 overflow-hidden bg-white flex items-center justify-center p-4">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <ImageOff className="text-slate-200" size={40} aria-hidden="true" />
            <span className="text-xs text-slate-300 font-medium">Imagem em breve</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            width="224"
            height="224"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        )}
      </div>
      <div className="p-5 border-t border-slate-100 flex items-center justify-between gap-2">
        <h4 className="text-base font-bold text-[#0f172a]">{label}</h4>
        <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Orçamento →
        </span>
      </div>
    </a>
  )
}

function EquipmentCardMobile({ src, alt, label, delay = 0 }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article
      className="bg-white border border-slate-200 overflow-hidden shadow-sm md:hidden"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="h-56 overflow-hidden bg-white flex items-center justify-center p-4">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <ImageOff className="text-slate-200" size={40} aria-hidden="true" />
            <span className="text-xs text-slate-300 font-medium">Imagem em breve</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            width="224"
            height="224"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <div className="p-5 border-t border-slate-100">
        <h4 className="text-base font-bold text-[#0f172a] text-center">{label}</h4>
      </div>
    </article>
  )
}

export default function Fleet() {
  return (
    <section id="equipamentos" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0f172a] text-5xl md:text-6xl font-extrabold mb-4">A Nossa Frota</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Equipamentos atualizados para garantir alta performance e segurança no canteiro de obras ou na estrada.
          </p>
        </div>

        {/* Frota Rodoviária */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4" data-aos="fade-right">
            <div className="bg-yellow-400 p-3 rounded-sm text-[#0f172a]">
              <Truck className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#0f172a]">Frota Rodoviária</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {roadFleet.map((item, index) => (
              <>
                <EquipmentCard key={item.src + '-d'} {...item} delay={(index % 4) * 75} />
                <EquipmentCardMobile key={item.src + '-m'} {...item} delay={(index % 4) * 75} />
              </>
            ))}
          </div>
        </div>

        {/* Linha Amarela & Movimentação */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4" data-aos="fade-right">
            <div className="bg-yellow-400 p-3 rounded-sm text-[#0f172a]">
              <Boxes className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#0f172a]">Linha Amarela &amp; Movimentação</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {yellowLineFleet.map((item, index) => (
              <>
                <EquipmentCard key={item.src + '-d'} {...item} delay={(index % 4) * 75} />
                <EquipmentCardMobile key={item.src + '-m'} {...item} delay={(index % 4) * 75} />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
