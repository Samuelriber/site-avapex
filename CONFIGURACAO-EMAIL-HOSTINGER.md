# Configuração de E-mail — Anti-Spam (Hostinger)

Correção aplicada em `public/send-email.php` para reduzir queda em spam.
As etapas abaixo **precisam ser feitas manualmente no painel da Hostinger / DNS**
— não é possível fazer via código.

---

## ⚠️ ATENÇÃO IMPORTANTE — O formulário NÃO usa o send-email.php hoje

O componente de contato (`src/components/ContactForm.jsx`) envia através do
**EmailJS** (`src/services/emailApi.js` → `@emailjs/browser`), e **não** faz
`fetch` para o `send-email.php`.

Ou seja: **corrigir o PHP sozinho não muda o que o visitante envia hoje.**

Para que o `send-email.php` corrigido passe a ser usado, é preciso trocar o
`emailApi.js` para chamar o endpoint PHP, por exemplo:

```js
export async function sendContactEmail(data) {
  const res = await fetch('/send-email.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Falha ao enviar')
  return res.json()
}
```

> Não fiz essa alteração porque a instrução foi **não alterar componentes React**.
> `emailApi.js` é um service (não um componente), mas mudá-lo altera o caminho de
> envio do app — confirme com o Samuel antes de aplicar.
>
> Se a decisão for **continuar com o EmailJS**, então o anti-spam precisa ser
> resolvido no painel do EmailJS / no provedor configurado lá, e o `send-email.php`
> fica como rota alternativa.

---

## 1. SPF Record (DNS)

| Tipo | Nome | Valor |
|------|------|-------|
| TXT  | `@`  | `v=spf1 include:hostinger.com ~all` |

> Se já existir um registro SPF, **não crie outro** — edite o existente para
> incluir `include:hostinger.com`. Dois registros SPF separados invalidam o SPF.

---

## 2. DKIM

Ativar no painel Hostinger em:
**E-mails → (domínio avapex.com.br) → Configurações de autenticação → DKIM**

A Hostinger gera os registros DKIM automaticamente; basta ativar.

---

## 3. DMARC Record (DNS)

| Tipo | Nome     | Valor |
|------|----------|-------|
| TXT  | `_dmarc` | `v=DMARC1; p=none; rua=mailto:comercial@avapex.com.br` |

> `p=none` apenas monitora. Depois de confirmar que SPF e DKIM estão passando,
> pode-se endurecer para `p=quarantine` e futuramente `p=reject`.

---

## 4. Caixa / alias do remetente

O e-mail remetente **`no-reply@avapex.com.br`** precisa existir na Hostinger
como caixa de e-mail **ou** alias. Se não existir, crie um alias apontando
para `comercial@avapex.com.br`.

> Um `From:` com endereço inexistente no domínio piora muito a reputação e
> derruba em spam.

---

## Resumo das mudanças no código (`send-email.php`)

- `From:` com domínio próprio: `Avapex Transportes <no-reply@avapex.com.br>`
- `Reply-To:` aponta para o e-mail do visitante (`$nome <$email>`)
- `MIME-Version: 1.0` + `Content-Type: text/plain; charset=UTF-8` declarados
- `Content-Transfer-Encoding: 8bit`
- Assunto simplificado: `Nova solicitacao de orcamento - <nome>`
- Envelope sender via 5º parâmetro do `mail()` (`-f no-reply@avapex.com.br`)
  → ajuda no alinhamento SPF
- Campos alinhados com o formulário real: **`servico`** e **`mensagem`**
  (o código original sugerido usava `area`/`detalhes`, que não existem no form)

## Checklist final

- [x] `send-email.php` salvo com headers corrigidos
- [x] `From` usa domínio avapex.com.br
- [x] `Reply-To` aponta para o e-mail do visitante
- [x] `MIME-Version` e `Content-Type` declarados
- [x] PHP alinhado com os campos reais do form (`servico`, `mensagem`)
- [x] `npm run build` passa sem erros
- [ ] SPF configurado no DNS (manual)
- [ ] DKIM ativado na Hostinger (manual)
- [ ] DMARC configurado no DNS (manual)
- [ ] Alias/caixa `no-reply@avapex.com.br` criado (manual)
- [ ] **Decidir:** apontar o formulário para o PHP ou manter EmailJS
