# Landing Pages — Avapex Transportes

## Como criar uma nova landing page

**1. Duplique o template:**
```
cp -r src/landing-pages/_template src/landing-pages/nome-da-campanha
```

**2. Edite o objeto `CONFIG` em `nome-da-campanha/index.jsx`**

Configure título, descrição SEO, textos do hero, campos do formulário e IDs de tracking.

**3. Registre a rota em `src/main.jsx`:**
```jsx
import NomeDaCampanha from './landing-pages/nome-da-campanha'
<Route path="/lp/nome-da-campanha" element={<NomeDaCampanha />} />
```

**4. Adicione assets da campanha em `public/lp/nome-da-campanha/`**

**5. Para usar `<Helmet>` (meta tags dinâmicas):**
```
npm install react-helmet-async
```
Envolva o app em `main.jsx` com `<HelmetProvider>` e descomente o bloco `<Helmet>` no template.

---

## Convenções

| Item | Padrão |
|---|---|
| Pasta | `src/landing-pages/nome-em-kebab-case/` |
| Rota | `/lp/nome-em-kebab-case` |
| Assets | `public/lp/nome-da-campanha/` |
| SEO | `noindex, nofollow` por padrão — remover quando aprovar indexação |
| UTMs | Capturados automaticamente pelo `useLeadForm` |

---

## Rotas ativas

| Campanha | Rota | Status |
|---|---|---|
| Empilhadeiras Elétricas a Lítio | `/lp/empilhadeiras-litio` | noindex |
| Especial Copa | `/lp/especial-copa` | noindex |
