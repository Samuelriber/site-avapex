# Avapex Transportes — Site Institucional

Site institucional desenvolvido para a **Avapex Transportes**, empresa com mais de 18 anos de atuação em **logística, transporte rodoviário, intralogística e locação de máquinas** para o setor de mineração e indústria pesada.

---

## Stack

- **React 18** com **Vite 6**
- **Tailwind CSS** (via CDN)
- **AOS** (Animate On Scroll)
- **Lucide Icons** (via CDN UMD)
- **Google Fonts** — Inter
- **GitHub Actions** — deploy automático no GitHub Pages

---

## Estrutura do Projeto

```
site-avapex/
├── public/
│   ├── img/               # Logotipos, fotos e vídeo institucional
│   └── Equipamentos/      # Fotos da frota e equipamentos
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navegação, menu mobile, logo dinâmico
│   │   ├── Hero.jsx           # Banner principal com vídeo institucional
│   │   ├── Stats.jsx          # Barra de números (18 anos, ISO 9001, etc.)
│   │   ├── Services.jsx       # Serviços oferecidos
│   │   ├── WhyUs.jsx          # Diferenciais competitivos
│   │   ├── Fleet.jsx          # Galeria da frota e equipamentos
│   │   ├── MVV.jsx            # Missão, Visão e Valores
│   │   ├── ClientsCarousel.jsx # Carrossel infinito de clientes
│   │   ├── About.jsx          # Quem somos + Grupo SEDAY
│   │   ├── FAQ.jsx            # Perguntas frequentes
│   │   ├── ContactForm.jsx    # Formulário de orçamento + mapa
│   │   ├── Footer.jsx         # Rodapé
│   │   ├── FloatingButtons.jsx # WhatsApp flutuante + botão voltar ao topo
│   │   ├── CookieBanner.jsx   # Banner de cookies com localStorage
│   │   ├── SEO.jsx            # Meta tags e JSON-LD
│   │   └── TrackingScripts.jsx # Google Analytics / scripts de rastreamento
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── .github/
│   └── workflows/
│       └── deploy.yml     # CI/CD — build e deploy automático no GitHub Pages
├── index.html
├── vite.config.js
└── package.json
```

---

## Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/Samuelriber/site-avapex.git
cd site-avapex

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em `http://localhost:5173`

---

## Build para Produção

```bash
npm run build
```

Os arquivos otimizados são gerados na pasta `dist/`.

---

## Deploy

O deploy é feito automaticamente via **GitHub Actions** a cada push na branch `main`.

Pipeline (`.github/workflows/deploy.yml`):
1. Checkout do repositório
2. Setup Node.js 20
3. `npm ci`
4. `npm run build`
5. Upload do artefato `dist/`
6. Deploy no GitHub Pages

> Para ativar: GitHub → Settings → Pages → Source: **GitHub Actions**

---

## Funcionalidades

- Layout 100% responsivo (mobile-first)
- Hero com vídeo institucional e fallback para imagem em mobile
- Animações de scroll com AOS
- Carrossel infinito de logos de clientes
- Galeria de frota com 22+ equipamentos
- FAQ com accordion nativo (`<details>/<summary>`)
- Formulário de orçamento com envio por e-mail
- Mapa do Google Maps embutido
- Botão flutuante do WhatsApp
- Banner de cookies com persistência em localStorage
- SEO técnico: meta tags, Open Graph, JSON-LD, sitemap, robots.txt
- Certificação ISO 9001 destacada

---

## Desenvolvido por

**Samuel Angelo Rezende Ribeiro**
Backend & Data-Oriented Developer

[LinkedIn](https://www.linkedin.com/in/samuelribeiro-/) · [GitHub](https://github.com/Samuelriber)
