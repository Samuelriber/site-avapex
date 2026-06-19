/**
 * TEMPLATE DE LANDING PAGE — AVAPEX
 * Edite apenas o objeto CONFIG. Não altere a estrutura abaixo.
 *
 * Para criar nova LP:
 * 1. cp -r src/landing-pages/_template src/landing-pages/nome-da-campanha
 * 2. Edite CONFIG abaixo
 * 3. Adicione rota em src/main.jsx
 */
import { HelmetProvider, Helmet } from 'react-helmet-async'
import LPHeader from './components/LPHeader'
import LPHero from './components/LPHero'
import LPObjections from './components/LPObjections'
import LPProblem from './components/LPProblem'
import LPSolution from './components/LPSolution'
import LPTestimonials from './components/LPTestimonials'
import LPForm from './components/LPForm'
import ContactFormLP from './components/ContactFormLP'
import LPFooter from './components/LPFooter'
import './styles/lp.css'

export const CONFIG = {
  seo: {
    title: 'Pare de perder dinheiro com logística que falha — Avapex Transportes',
    description: 'Transporte pesado, movimentação industrial e locação de equipamentos com frota própria. ISO 9001. Atendimento 24/7. MG, SP e RJ.',
    noindex: true,
  },

  header: {
    logo: '/img/img/Logos/logo-avapex-transportes-v1.svg',
    cta_label: 'Quero uma proposta agora',
    cta_anchor: '#formulario',
  },

  hero: {
    badge: '18 ANOS OPERANDO EM MINERAÇÃO, SIDERURGIA E FERROVIA',
    titulo: 'Sua operação não pode parar. A nossa também não para.',
    subtitulo: 'Frota própria rastreada, equipe treinada para ambientes de risco e suporte 24/7 — para quem não aceita desculpa de fornecedor.',
    cta_primary: 'Quero uma proposta em 2 horas',
    cta_secondary: 'Ver quem já confia na Avapex',
    clientes_logos: [
      { src: '/img/img/Empresas/VALE.svg',      alt: 'Vale' },
      { src: '/img/img/Empresas/USIMINAS.svg',  alt: 'Usiminas' },
      { src: '/img/img/Empresas/MRS.svg',       alt: 'MRS Logística' },
      { src: '/img/img/Empresas/MAGNESITA.svg', alt: 'RHI Magnesita' },
    ],
    clientes_label: 'Quem já parou de se preocupar com logística:',
  },

  objections: [
    {
      icone: 'shield-check',
      titulo: 'ISO 9001: você tem prova documental de qualidade',
      texto: 'Não é promessa. É certificação auditada. Cada operação segue processos padronizados — você tem respaldo se algo der errado.',
    },
    {
      icone: 'clock',
      titulo: 'Problema às 3h da manhã? A gente atende.',
      texto: 'Suporte 24/7 com equipe própria. Sem terceiro que não sabe de nada. Sem "abre na segunda de manhã".',
    },
    {
      icone: 'file-check',
      titulo: 'Contrato sem letra miúda para te pegar depois',
      texto: 'Escopo, SLA, valores e responsabilidades definidos antes de começar. Você sabe exatamente o que está comprando.',
    },
    {
      icone: 'map-pin',
      titulo: 'Base a 2h de distância — não a 1.200km',
      texto: 'Matriz na BR-040 em Conselheiro Lafaiete. Bases em BH, São Paulo, Rio de Janeiro, Juatuba e Ipatinga. Pronto atendimento de verdade.',
    },
  ],

  problem: {
    titulo: 'Quanto sua empresa já perdeu com logística que falhou?',
    itens: [
      {
        emoji: '🔴',
        dor: 'Fornecedor atrasou a entrega',
        impacto: 'Você pagou a multa contratual. O fornecedor sumiu.',
      },
      {
        emoji: '🔴',
        dor: 'Equipamento parou na obra',
        impacto: 'R$ 15.000/dia de custo de paralisação. Sem previsão de retorno.',
      },
      {
        emoji: '🔴',
        dor: 'Frota sem rastreamento',
        impacto: 'Você não sabe onde está a carga. O cliente ligou antes de você.',
      },
      {
        emoji: '🔴',
        dor: 'Operador sem certificação em área de risco',
        impacto: 'Embargo, auditoria, processo. Tudo por escolher o mais barato.',
      },
    ],
    transicao: 'Esses problemas têm um custo real. A Avapex existe para eliminar cada um deles.',
  },

  solution: {
    titulo: 'Como garantimos que isso nunca acontece com você',
    itens: [
      {
        numero: '01',
        titulo: 'Frota 100% própria — sem subcontratado te dando desculpa',
        texto: 'Cada veículo rastreado em tempo real. Você acompanha pelo sistema. Problema apareceu: a gente resolve, não terceiriza o problema.',
      },
      {
        numero: '02',
        titulo: 'Operadores treinados para onde outros não entram',
        texto: 'Certificados para mineração, canteiro de obras, içamento de cargas e operações industriais. Nada de motorista comum em área crítica.',
      },
      {
        numero: '03',
        titulo: 'Um contato. Uma ligação. Problema resolvido.',
        texto: 'Gerente de conta dedicado do primeiro dia. Sem jogo de telefone entre departamentos. Você liga para uma pessoa e ela resolve.',
      },
    ],
  },

  testimonials: [
    {
      foto: '/lp/depoimentos/foto-01.jpg',
      nome: 'Nome do Responsável',
      cargo: 'Gerente de Operações',
      empresa: 'Nome da Empresa',
      depoimento: 'Coloque aqui um depoimento real com número concreto. Ex: "Reduzimos 28% do custo logístico em 4 meses. Nunca mais tivemos paralisação por falha de transporte."',
    },
    {
      foto: '/lp/depoimentos/foto-02.jpg',
      nome: 'Nome do Responsável',
      cargo: 'Diretor de Suprimentos',
      empresa: 'Nome da Empresa',
      depoimento: 'Coloque aqui outro depoimento real. Quanto mais específico o resultado, mais converte. Nomes e cargos reais são obrigatórios.',
    },
    {
      foto: '/lp/depoimentos/foto-03.jpg',
      nome: 'Nome do Responsável',
      cargo: 'Coordenador de Logística',
      empresa: 'Nome da Empresa',
      depoimento: 'Terceiro depoimento real aqui. Depoimento sem foto e sem cargo real não converte — troque assim que tiver os dados reais.',
    },
  ],

  form: {
    titulo: 'Receba uma proposta em até 2 horas úteis',
    subtitulo: 'Descreva sua operação. Nossa equipe analisa e retorna com valores e prazo — sem enrolação e sem compromisso.',
    campos: ['nome', 'empresa', 'telefone', 'email', 'mensagem'],
    cta_label: 'Quero minha proposta agora',
    destino: 'comercial@avapex.com.br',
    utm_campaign: 'template',
    garantia: 'Respondemos em até 2 horas úteis. Sem spam, sem ligação não solicitada.',
  },
}

export default function LandingPageTemplate() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{CONFIG.seo.title}</title>
        <meta name="description" content={CONFIG.seo.description} />
        {CONFIG.seo.noindex && <meta name="robots" content="noindex, nofollow" />}
      </Helmet>

      <div className="lp-root">
        <LPHeader config={CONFIG.header} />
        <LPHero config={CONFIG.hero} />
        <LPObjections items={CONFIG.objections} />
        <LPProblem config={CONFIG.problem} />
        <LPSolution config={CONFIG.solution} />
        <LPTestimonials items={CONFIG.testimonials} />
        <LPForm config={CONFIG.form} />
        <ContactFormLP />
        <LPFooter />
      </div>
    </HelmetProvider>
  )
}
