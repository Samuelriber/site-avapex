export default function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-12 pb-8 text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="img/AVAPEX OFICIAL 02 branca e amarela.png"
            width="3040"
            height="859"
            alt="Avapex Transportes Logotipo de Rodapé"
            loading="lazy"
            decoding="async"
            className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity"
          />
        </div>
        <p className="mb-2 text-sm">© 2026 Avapex Transportes. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
