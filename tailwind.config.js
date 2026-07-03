/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:   '#0B1121',
          yellow: '#F5C518',
          steel:  '#1E2A3A',
          dust:   '#F0EDE8',
          iron:   '#8A8F98',
        },
        // Paleta da LP "empilhadeiras-litio" — namespace isolado, não afeta outras páginas.
        // Extraída da logo real da Avapex (preto/branco + acento dourado #FFD028)
        // e completada com os tons "brand.*" (steel/iron) já usados no site principal.
        eqp: {
          'ink':            '#17181b', // fundo base da página
          'ink-deep':       '#121317', // hero / setores
          'panel-sunken':   '#101114', // cards recolhidos (benefits, form)
          'panel':          '#2a2c30', // footer
          'header':         '#24262b', // header fixo
          'chalk':          '#f7f7f5', // texto principal
          'fog':            '#a9aeb8', // texto secundário
          'seam':           '#33373d', // bordas / divisórias
          'caution':        '#ffd028', // acento — extraído direto da logo
          'caution-pale':   '#ffe27a', // tint claro do acento
          'caution-ink':    '#1b1300', // texto sobre o acento
          'charge':         '#0f8c5c', // verde "lítio / carga"
          'charge-bright':  '#5be0a6', // verde claro p/ texto em fundo escuro
        },
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        dm:     ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
