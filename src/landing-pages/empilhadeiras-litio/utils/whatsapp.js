// Monta o link de WhatsApp com a mensagem já preenchida, citando o setor
// escolhido em "Setores de Atuação" (quando houver).
export function buildWhatsappHref(base, setor) {
  const mensagem = setor
    ? `Olá! Tenho interesse em soluções de empilhadeiras elétricas a lítio para o setor de ${setor}.`
    : 'Olá! Tenho interesse em soluções de empilhadeiras elétricas a lítio.'
  return `${base}?text=${encodeURIComponent(mensagem)}`
}
