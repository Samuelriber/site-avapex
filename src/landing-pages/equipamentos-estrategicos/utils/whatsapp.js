// Monta o link de WhatsApp com a mensagem já preenchida, citando o
// equipamento escolhido (quando houver).
export function buildWhatsappHref(base, equipamento) {
  const mensagem = equipamento
    ? `Olá! Tenho interesse na locação de ${equipamento}.`
    : 'Olá! Tenho interesse na locação de equipamentos para minha operação.'
  return `${base}?text=${encodeURIComponent(mensagem)}`
}
