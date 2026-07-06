import { useSearchParams } from 'react-router-dom'

// Lê o setor (Mineração/Indústria/Logística) escolhido no card de "Setores de Atuação"
// via query string (?setor=...), pra pré-preencher o formulário e os links de WhatsApp.
export function useSetorParam() {
  const [params] = useSearchParams()
  return params.get('setor') || ''
}
