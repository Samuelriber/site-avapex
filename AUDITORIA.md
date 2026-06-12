# AUDITORIA TÉCNICA — Site Avapex Transportes
**Stack:** React 18 + Vite 6 + Tailwind CSS 3  
**Data da auditoria:** 10 de junho de 2026  
**Auditor:** Claude Sonnet 4.6

---

## 1. PERFORMANCE DE CARREGAMENTO

### 1.1 Assets Pesados

| Arquivo | Formato | Tamanho | Onde é usado | Diagnóstico |
|---|---|---|---|---|
| `public/img/videoSITE.webm` | WEBM | **15 MB** | `Hero.jsx` `<video>` desktop | Crítico: vídeo sem otimização de bitrate. `preload="auto"` força download imediato mesmo antes de qualquer interação. |
| `public/img/hero-mobile.webp` | WEBP | **2,6 MB** | `Hero.jsx` `<img>` mobile | Muito pesado para mobile. Uma imagem hero mobile deveria ter no máximo 200–400 KB com dimensões ≤ 828px. |
| `public/img/img/Logos/icon-caminhao-silhueta.svg` | SVG | **720 KB** | **Não referenciado em nenhum arquivo .jsx** — asset órfão. | SVG de 720 KB é uma foto vetorial complexa (1360×907). Não está sendo usado no código atual. |
| `public/img/img/Logos/foto-caminhao-avapex.svg` | SVG | **684 KB** | `About.jsx` linha 59: foto "polaroid" | SVG usado como substituição de foto. 684 KB para um logo/foto = não comprimível como PNG/WEBP. Deveria ser WEBP. |
| `public/img/img/Empresas/MAGNESITA.svg` | SVG | **664 KB** | `ClientsCarousel.jsx` | SVG de logo de cliente com 664 KB é claramente não otimizado — logo simples deveria ter < 10 KB. Provavelmente foi exportado como SVG de imagem rasterizada. |
| `public/img/img/Empresas/MRS.svg` | SVG | **372 KB** | `ClientsCarousel.jsx` | Mesmo problema: SVG de logo com 372 KB. |
| `public/img/img/Logos/logo-grupo-seday-branco.svg` | SVG | **352 KB** | Órfão — nenhuma referência em `src/` | 352 KB para logo = SVG não vetorizado. |
| `public/img/Equipamentos/Roll on Roll of.png` | PNG | **860 KB** | `public/img/Equipamentos/` — órfão efetivo por path issue (ver 1.5) | PNG sem compressão. Deveria ser WEBP ≤ 80 KB. |
| `public/img/Equipamentos/Empilhadeira eletrica.png` | PNG | **860 KB** | `public/img/Equipamentos/` — órfão efetivo por path issue | Idem. |
| `public/img/img/Logos/logo-avapex-transportes-v2.svg` | SVG | **248 KB** | `Header.jsx` (logo no topo) | Logo usado no header crítico para LCP. 248 KB para SVG de logo é excessivo. |
| `public/img/img/Logos/logo-avapex-transportes-v1.svg` | SVG | **116 KB** | `Header.jsx`, `Footer.jsx`, `GrupoSeday.jsx`, LP | Tamanho razoável mas ainda otimizável (svgo pode reduzir 60–80%). |
| `public/img/img/Logos/icon-whatsapp.svg` | SVG | **160 KB** | `FloatingButtons.jsx` linha 32 | 160 KB para ícone WhatsApp é absurdo — um SVG inline com 3 paths teria < 1 KB. |

**Total de SVGs não referenciados (órfãos) em `public/img/img/Logos/`:**
- `icon-caminhao-silhueta.svg` (720 KB) — nenhuma referência em `src/`
- `logo-avapex-transportes-rascunho-v1.svg` (132 KB) — usado apenas como favicon em `index.html`
- `logo-avapex-transportes-rascunho-v2.svg` (276 KB) — nenhuma referência em `src/`
- `logo-avapex-transportes-v3.svg` (72 KB) — nenhuma referência em `src/`
- `logo-avapex-transportes-v4.svg` (92 KB) — nenhuma referência em `src/`
- `logo-seday-equipamentos-banner-v1.svg` (144 KB) — nenhuma referência em `src/`
- `logo-seday-equipamentos-banner-v2.svg` (152 KB) — nenhuma referência em `src/`
- `logo-seday-equipamentos-banner-v3.svg` (152 KB) — nenhuma referência em `src/`
- `logo-seday-equipamentos-variante.svg` (84 KB) — nenhuma referência em `src/`
- `logo-grupo-seday-branco.svg` (352 KB) — nenhuma referência em `src/`
- `INDEX.md` — arquivo de documentação dentro de `public/` (servido publicamente como `/img/img/Logos/INDEX.md`)

**Peso total de SVGs órfãos:** ~2,2 MB sendo servidos pelo servidor sem nunca serem requisitados.

**Também órfã:** a pasta `public/Equipamentos/` com 10 imagens (≈ 3,5 MB) é um subconjunto duplicado de `public/img/Equipamentos/`. Ver seção 1.5.

---

### 1.2 Estratégia de Loading

**Preload incorreto — CRÍTICO:**
- `index.html` linha 14: `<link rel="preload" href="img/fundo site mobile.jpg" as="image" ...>`
- O arquivo `public/img/fundo site mobile.jpg` **não existe**. O arquivo real é `public/img/hero-mobile.webp`.
- O preload aponta para um arquivo removido/renomeado, fazendo o browser desperdiçar uma requisição e **a imagem hero mobile (2,6 MB) não recebe preload algum**.
- Correção: alterar o `href` para `img/hero-mobile.webp` e `type` para `image/webp`.

**Video poster ausente — CRÍTICO:**
- `Hero.jsx` linha 41: `poster="img/caminhão.webp"`
- O arquivo `public/img/caminhão.webp` **não existe** em lugar algum no projeto.
- Sem poster, o vídeo exibe tela preta até carregar. Impacto direto em CLS/LCP.

**`preload="auto"` no vídeo:**
- `Hero.jsx` linha 38: `preload="auto"` em um vídeo de 15 MB force-downloads o vídeo inteiro antes de qualquer interação. Deveria ser `preload="none"` ou `preload="metadata"`.

**Imagem Hero com fetchpriority correto:**
- `Hero.jsx` linha 31: `fetchpriority="high"` está presente na `<img>` mobile — correto, mas o preload correspondente está quebrado (ver acima).

---

### 1.3 Bundle e Dependências

**Dependências instaladas mas não utilizadas:**

- `@emailjs/browser@^4.4.1` — instalado em `package.json` como dependência de produção, mas **nenhum arquivo em `src/` importa `@emailjs/browser`**. O formulário usa `/api/send-email`. A dependência aumenta o bundle sem servir a nada.

- `react-helmet-async@^3.0.0` — instalado, mas `src/components/SEO.jsx` **retorna `null`**. O `HelmetProvider` só é usado na landing page template. Para o site principal, é peso morto.

**Google Ads com variável não substituída:**
- `index.html` linhas 49–55: `gtag('config', '%VITE_GADS_ID%')` — em Vite, variáveis de ambiente são substituídas em arquivos `.jsx`/`.js` via `import.meta.env`, mas **não automaticamente em `index.html`**. O script estaria sendo enviado ao Google Ads com o literal `%VITE_GADS_ID%` ao invés do ID real. Requer uso do plugin `vite-plugin-html` ou injeção via script hook.

**Sem code-splitting no site principal:**
- `App.jsx` importa todos os componentes estaticamente. Candidatos a `lazy()`: `Fleet`, `GrupoSeday`, `MVV`, `PoliticaGestao` (todos below-the-fold, nenhum afeta LCP).

**AOS no bundle principal:**
- `App.jsx` importa `AOS` e `'aos/dist/aos.css'` estaticamente. O CSS do AOS é carregado globalmente para toda a página, mesmo que o usuário tenha `prefers-reduced-motion`.

**`vite.config.js` sem configurações de build:**
- Apenas o plugin React e `base: '/'`. Sem `rollupOptions.output.manualChunks`, sem `build.chunkSizeWarningLimit`, sem compressão Gzip/Brotli configurada.

---

### 1.4 Fontes

**Carregamento:** via Google Fonts com `<link rel="preconnect">` para `fonts.googleapis.com` e `fonts.gstatic.com` — correto.

**`display=swap` presente:** a URL contém `display=swap` — correto, evita FOIT.

**Problema — font-family duplicado:**
- `src/index.css` linha 16: `body { font-family: "DM Sans", sans-serif; }` define a fonte globalmente via CSS puro.
- `tailwind.config.js` define `fontFamily.dm` e `fontFamily.barlow` como tokens.
- O CSS global e os tokens Tailwind coexistem sem conflito, mas são fontes de verdade paralelas. `font-dm` em Tailwind não é usado em `body` — o CSS inline sobrepõe.

**Fontes carregadas mas não aplicadas via token:**
- `About.jsx`, `Services.jsx`, `Fleet.jsx` não usam `font-dm` ou `font-barlow` explicitamente — herdam `font-family` do `body` CSS global, que funciona mas não passa pelo token Tailwind.

---

### 1.5 Caminhos Problemáticos

**CRÍTICO — Duplicação de pasta de equipamentos:**

Existem duas pastas de imagens de equipamentos no `public/`:
- `public/Equipamentos/` — 10 arquivos (≈ 3,5 MB)
- `public/img/Equipamentos/` — 25 arquivos (≈ 10 MB)

`Fleet.jsx` usa `src='Equipamentos/...'` (sem `img/`), o que serve de `public/Equipamentos/`. Porém **13 das 22 imagens listadas em `Fleet.jsx` só existem em `public/img/Equipamentos/`** e não em `public/Equipamentos/`. Resultado: **13 cards da frota exibem o placeholder "Imagem em breve"** em produção.

Imagens FALTANDO em `public/Equipamentos/` (mas presentes em `public/img/Equipamentos/`):
- `Caminhões Munck.jpg`, `Caminhões Comboio.png`, `poliguidantes.png`, `Roll on Roll of.png`
- `Carretas Prancha.png`, `carreta silo.png`, `Empilhadeira eletrica.webp`, `Empilhadeira Retráteis.png`
- `Big Truck.png`, `Trator de Pneu.png`, `Escavadeiras Hidráulicas.png`
- `Retroescavadeiras cabinadas.png`, `Manipuladores Telescópicos.png`

**Correção:** alterar todos os `src` em `Fleet.jsx` de `'Equipamentos/...'` para `'img/Equipamentos/...'` e deletar a pasta `public/Equipamentos/` (duplicata).

**Pasta `.claude/` dentro de `public/`:**
- `public/img/img/Logos/.claude/settings.local.json` — arquivo de configuração interna do Claude Code foi parar dentro de `public/`, sendo **servido publicamente** em `/img/img/Logos/.claude/settings.local.json`. Deve ser deletado imediatamente.

**Estrutura `img/img/` (caminho duplo):**
- Todos os logos e ícones estão em `public/img/img/Logos/` e `public/img/img/Empresas/` — o aninhamento `img/img/` é um artefato de reorganização. Funciona, mas é confuso e resulta em URLs como `/img/img/Logos/...`.

---

## 2. DRY / CÓDIGO REPETIDO

### 2.1 JSX Duplicado

**Padrão de cabeçalho de seção repetido 4 vezes:**

Os componentes `Services.jsx`, `WhyUs.jsx`, `MVV.jsx` e `ClientsCarousel.jsx` contêm estrutura idêntica:
```jsx
<div className="text-center mb-16" data-aos="fade-up">
  <h2 className="text-brand-navy text-4xl font-extrabold mb-4">...</h2>
  <p className="text-slate-600 max-w-2xl mx-auto">...</p>
  <div className="w-16 h-1 bg-brand-yellow mx-auto mt-6" />
</div>
```
Arquivos afetados: `Services.jsx` L39–46, `WhyUs.jsx` L47–55, `MVV.jsx` L15–21, `ClientsCarousel.jsx` L66–74.  
Deveria ser um componente `<SectionHeader title subtitle />`.

**Cards MVV repetidos 3 vezes manualmente:**
- `MVV.jsx` linhas 25–79: os três cards (Missão, Visão, Valores) são renderizados manualmente em JSX separado, não via `.map()`. O wrapper `<div className="bg-brand-dust border border-slate-200 border-t-4 border-t-brand-yellow ...">` se repete literalmente 3 vezes.

---

### 2.2 Classes Tailwind Longas Repetidas

**Classe de input repetida 5 vezes em `ContactForm.jsx`:**
```
"w-full p-4 rounded-sm border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all bg-slate-50"
```
Linhas 113, 125, 140, 152, 183. Deveria ser uma constante string `INPUT_CLASS`.

**Classe de label repetida 6 vezes em `ContactForm.jsx`:**
```
"block text-sm font-bold text-slate-700 mb-2"
```
Linhas 105, 117, 132, 143, 157, 175.

**`bg-[#0B1121]` vs `bg-[#0B1120]` — cores quase idênticas hardcoded:**
- `ContactForm.jsx` L31: `bg-[#0B1121]`
- `Footer.jsx` L5: `bg-[#0B1121]`
- `PoliticaGestao.jsx` L11: `bg-[#0B1120]` (diferença de 1 no hex — provavelmente erro)

Estas deveriam usar `bg-brand-navy` (já configurado em `tailwind.config.js` como `#0B1121`).

---

### 2.3 Dados Hardcoded Espalhados

**Número de WhatsApp / telefone:**

| Arquivo | Linha | Valor |
|---|---|---|
| `FloatingButtons.jsx` | 22 | `https://wa.me/5531953241291` |
| `FloatingButtons.jsx` | 25, 44 | texto: `+55 31 9532-4129` |
| `Footer.jsx` | 107 | `https://wa.me/5531953241291` |
| `Footer.jsx` | 109 | texto: `Taís · +55 31 9532-4129` |
| `Footer.jsx` | 113–114 | `https://wa.me/5531984657066` — Joice `+55 31 8465-7066` |
| `ContactForm.jsx` | 55 | `(31) 98465-7066` |
| `LP LPForm.jsx` | mensagem de erro | `(31) 98465-7066` |

**Inconsistência detectada:** O número Joice aparece como `31984657066` no `wa.me` do Footer mas como `(31) 98465-7066` no ContactForm — formatos diferentes do mesmo número. Deveria estar em `src/constants/contact.js`.

**E-mail corporativo espalhado:**
- `ContactForm.jsx` L65: `comercial@avapex.com.br`
- `LP _template/index.jsx` L149: `comercial@avapex.com.br`

**Endereço:**
- `ContactForm.jsx` L76: `Rodovia BR040, 22750, Barreira - Cons. Lafaiete/MG`
- `index.html` Schema L83: `Rodovia BR040, 22750, Barreira`

**"18 anos" hardcoded em 6 lugares:**
- `Hero.jsx` L82, `About.jsx` L15 e L68, `Services.jsx` L43, `WhyUs.jsx` L12, `Stats.jsx` L2  
Deveria ser `COMPANY_YEARS_EXPERIENCE = 18` em `src/constants/company.js`.

---

### 2.4 Lógica Duplicada

**Dois IntersectionObservers com lógica idêntica:**
- `Header.jsx` L38–46: observa `#header-trigger`
- `FloatingButtons.jsx` L7–16: observa `#backtotop-trigger`

Ambos fazem: `setState(!entry.isIntersecting)`. Deveria ser um hook `useIntersectionTrigger(id)`.

**`window.addEventListener('resize', ...)` sem throttle:**
- `Header.jsx` L31–35: listener de `resize` sem debounce/throttle. Em mobile, cada pixel de redimensionamento dispara `setIsMobile`. Deveria usar `window.matchMedia('(max-width: 768px)').addEventListener('change', ...)`.

---

## 3. ERROS COMUNS DE CÓDIGO GERADO POR IA

### 3.1 useEffect sem Cleanup

**`App.jsx` linhas 22–24:**
```jsx
useEffect(() => {
  AOS.init({ once: true, duration: 600, offset: 50 })
}, [])
```
`AOS.init()` não tem cleanup. Com StrictMode ativo (`main.jsx` L13), o `useEffect` roda duas vezes em desenvolvimento, re-inicializando o AOS desnecessariamente.

---

### 3.2 Listas com `key` Problemático

**`GrupoSeday.jsx` linha 54: `key={i}`**
```jsx
{empresas.map((empresa, i) => (
  <div key={i} ...>
```
Array estático, sem risco real de reordenação, mas é anti-pattern. Usar `key={empresa.alt}`.

---

### 3.3 Acessibilidade

**Hierarquia de headings com salto em `About.jsx`:**
```jsx
<h2>Mais de 18 Anos...</h2>
...
<h4>Certificação ISO 9001</h4>   {/* pula h3 */}
<h4>Cobertura Estratégica</h4>
```
Linhas 37, 47. Deveria ser `<h3>` ou `<p>` com estilo `font-bold`.

**`text-md` inválido em `Fleet.jsx` linha 67:**
`text-md` não é uma classe Tailwind válida (o correto é `text-base`). É ignorado silenciosamente — o texto herda o tamanho do pai.

**3 links da navegação quebrados:**

| Link na nav | ID buscado | ID real | Status |
|---|---|---|---|
| Diferenciais | `#por-que-avapex` | `#diferenciais` (`WhyUs.jsx` L44) | QUEBRADO |
| Clientes | `#credibilidade` | (sem id em `ClientsCarousel.jsx`) | QUEBRADO |
| FAQ | `#faq` | (componente `FAQ.jsx` foi deletado) | QUEBRADO |

`Header.jsx` linhas 18–22 não foi atualizado após a remoção do `FAQ.jsx` e renomeação de IDs.

**`aria-label` com número truncado em `FloatingButtons.jsx` L25:**
- Label: `+55 31 9532-4129` — mas o número correto é `+55 31 95324-1291` (9 dígitos após DDD). O link `wa.me/5531953241291` está correto; o label de acessibilidade está truncado.

---

### 3.4 Código Morto

**`src/index.css` linhas 71–100: CSS do header legado:**
```css
header#main-header #logo-dark { display: none !important; }
header#main-header.scrolled { background-color: ... }
.client-logo { filter: grayscale(100%); ... }
details > summary::-webkit-details-marker { display: none; }
```
O `Header.jsx` atual usa React state + IntersectionObserver — nenhum elemento tem `id="main-header"`, `id="logo-dark"` ou usa `.client-logo`. O CSS do FAQ é resquício do componente deletado. Todo o bloco é código morto.

**`src/components/SEO.jsx` retorna `null`:**
O componente tem todo o código comentado e retorna `null` (linha 38). É um stub — ou implementa `react-helmet-async` ou deleta o arquivo e o import em `App.jsx`.

**`public/send-email.php` legado:**
O projeto usa Cloudflare Workers para envio de e-mail (`/api/send-email`). O `send-email.php` nunca será executado em Cloudflare Pages. É código morto.

**`public/_headers` com CSP desatualizada:**
```
script-src ... https://api.emailjs.com
connect-src ... https://api.emailjs.com
```
`@emailjs/browser` não é mais usado. A CSP permite conexões desnecessárias.

**`MVV.jsx` linha 4: trailing whitespace em valor e key:**
```js
'Respeito ',  // espaço após a vírgula
```
Resulta em `key="Respeito "` (com espaço) inconsistente com os demais.

---

### 3.5 Anti-patterns React

**`ClientsCarousel.jsx` linhas 37–40: mutação direta do DOM:**
```jsx
onMouseEnter={(e) => Object.assign(e.currentTarget.style, logoHoverStyle)}
onMouseLeave={(e) => Object.assign(e.currentTarget.style, logoStyle)}
```
Mutação direta via `Object.assign` em `e.currentTarget.style` é anti-pattern. A classe `.client-logo:hover` já está definida no CSS global (`src/index.css` L71) mas não está sendo usada.

**`GrupoSeday.jsx`: array `empresas` declarado dentro do componente:**
Array estático criado a cada render. Deveria ser declarado fora do componente ou em arquivo de constantes.

---

### 3.6 SEO

**`og:image` apontando para arquivo inexistente:**
- `index.html` L26: `content="https://www.avapex.com.br/img/og-image.jpg"`
- `public/img/og-image.jpg` **não existe**. Compartilhamentos no WhatsApp/LinkedIn não exibirão imagem.

**Favicon usando rascunho com artefato visual:**
- `index.html` L35–39: todos os ícones (`rel="icon"`, `rel="apple-touch-icon"`, `msapplication-TileImage`) apontam para `logo-avapex-transportes-rascunho-v1.svg`.
- O `INDEX.md` no projeto descreve este arquivo como *"possui artefato visual no texto"*.
- `apple-touch-icon` e `msapplication-TileImage` não suportam SVG — esperam PNG.

**Schema JSON-LD com imagem deletada:**
- `index.html` L78: `"image": "https://www.avapex.com.br/img/AVAPEX icone.png"` — arquivo marcado como deletado no git status.

**Google Ads com variável não substituída:**
- `index.html` L49–55: `gtag('config', '%VITE_GADS_ID%')` — variável não é processada pelo Vite em `index.html` sem plugin adicional. O GA/Ads ID está sendo enviado como literal de texto.

---

## 4. RESUMO PRIORIZADO

| # | Problema | Arquivo(s) | Impacto | Esforço |
|---|---|---|---|---|
| 1 | **13 cards da frota exibem "Imagem em breve"** — `src` aponta para `Equipamentos/...` mas arquivos estão em `img/Equipamentos/...` | `Fleet.jsx` L11–36 | ALTO | BAIXO |
| 2 | **3 links da nav quebrados** — `#por-que-avapex`, `#credibilidade`, `#faq` não existem como IDs no DOM | `Header.jsx` L18–22, `WhyUs.jsx` L44, `ClientsCarousel.jsx` | ALTO | BAIXO |
| 3 | **Preload aponta para arquivo inexistente** (`fundo site mobile.jpg`) — `hero-mobile.webp` (2,6 MB) sem preload | `index.html` L14 | ALTO | BAIXO |
| 4 | **`.claude/settings.local.json` dentro de `public/`** — servido publicamente | `public/img/img/Logos/.claude/` | ALTO — segurança | BAIXO |
| 5 | **Video poster ausente** (`img/caminhão.webp` não existe) — tela preta no desktop | `Hero.jsx` L41 | ALTO | BAIXO |
| 6 | **`og:image` inexistente** — sem imagem ao compartilhar | `index.html` L26 | ALTO | BAIXO |
| 7 | **`preload="auto"` no vídeo de 15 MB** — download forçado | `Hero.jsx` L38 | ALTO | BAIXO |
| 8 | **`%VITE_GADS_ID%` não substituído** — Google Ads não funciona | `index.html` L49–55 | ALTO | MÉDIO |
| 9 | **`@emailjs/browser` instalado sem uso** — bundle desnecessário | `package.json` | MÉDIO | BAIXO |
| 10 | **`hero-mobile.webp` com 2,6 MB** — deveria ser ≤ 300 KB | `public/img/hero-mobile.webp` | ALTO | MÉDIO |
| 11 | **Schema JSON-LD referencia `AVAPEX icone.png` deletado** | `index.html` L78 | MÉDIO | BAIXO |
| 12 | **Favicon usando rascunho com artefato visual** | `index.html` L35–39 | MÉDIO | BAIXO |
| 13 | **CSS morto do header legado** (`.scrolled`, `#logo-dark`, `.client-logo`, FAQ) | `src/index.css` L71–100 | MÉDIO | BAIXO |
| 14 | **`bg-[#0B1120]` em `PoliticaGestao.jsx`** — 1 dígito hex errado vs `#0B1121` das outras seções | `PoliticaGestao.jsx` L11 | MÉDIO | BAIXO |
| 15 | **`SEO.jsx` retorna null** — react-helmet-async instalado sem uso no site principal | `SEO.jsx`, `package.json` | MÉDIO | MÉDIO |
| 16 | **`foto-caminhao-avapex.svg` (684 KB) como foto** | `About.jsx` L59 | MÉDIO | MÉDIO |
| 17 | **SVGs de logos de clientes com centenas de KB** (MAGNESITA 664 KB, MRS 372 KB) | `public/img/img/Empresas/` | MÉDIO | MÉDIO |
| 18 | **Pasta `public/Equipamentos/` duplicata** — 3,5 MB nunca referenciados (após fix #1) | `public/Equipamentos/` | BAIXO | BAIXO |
| 19 | **Constantes de contato espalhadas** em 5+ arquivos, com inconsistência de formato | `ContactForm.jsx`, `Footer.jsx`, `FloatingButtons.jsx`, LP | MÉDIO | BAIXO |
| 20 | **"18 anos" hardcoded em 6 componentes** | `Hero.jsx`, `About.jsx`, `Services.jsx`, `WhyUs.jsx`, `Stats.jsx` | BAIXO | BAIXO |
| 21 | **Padrão `SectionHeader` repetido 4 vezes** | `Services.jsx`, `WhyUs.jsx`, `MVV.jsx`, `ClientsCarousel.jsx` | BAIXO | BAIXO |
| 22 | **Classe de input/label repetida 5–6x** em `ContactForm.jsx` | `ContactForm.jsx` | BAIXO | BAIXO |
| 23 | **2 IntersectionObservers com lógica idêntica** | `Header.jsx`, `FloatingButtons.jsx` | BAIXO | BAIXO |
| 24 | **`send-email.php` legado em `public/`** — nunca executado no Cloudflare | `public/send-email.php` | BAIXO | BAIXO |
| 25 | **Cards MVV repetidos manualmente** sem `.map()` | `MVV.jsx` L25–79 | BAIXO | BAIXO |
| 26 | **`resize` listener sem throttle** em `Header.jsx` | `Header.jsx` L31–35 | BAIXO | BAIXO |
| 27 | **`key={i}` em `GrupoSeday.jsx`** | `GrupoSeday.jsx` L54 | BAIXO | MÍNIMO |
| 28 | **`h4` em `About.jsx` pulando `h3`** na hierarquia de headings | `About.jsx` L37, L47 | BAIXO | MÍNIMO |
| 29 | **`text-md` em `Fleet.jsx`** — classe Tailwind inválida | `Fleet.jsx` L67 | MÍNIMO | MÍNIMO |
| 30 | **`'Respeito '` com trailing whitespace** como valor e key em `MVV.jsx` | `MVV.jsx` L4 | MÍNIMO | MÍNIMO |
| 31 | **9 logos SVGs órfãos** em `public/img/img/Logos/` — ~2,2 MB nunca requisitados | `public/img/img/Logos/` | BAIXO | BAIXO |

---

*Auditoria cobre: 15 componentes, 2 arquivos de serviço, 1 CSS global, index.html, vite.config.js, tailwind.config.js, package.json, e ~75 assets em `public/`.*
