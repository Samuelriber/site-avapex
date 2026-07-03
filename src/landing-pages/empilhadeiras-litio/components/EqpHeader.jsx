export default function EqpHeader() {
  return (
    <header className="bg-eqp-header fixed top-0 w-full z-50 border-b border-eqp-seam">
      <div className="flex justify-between items-center h-20 px-6 max-w-7xl mx-auto">
        <img
          alt="Avapex Transportes"
          className="h-10 w-auto object-contain"
          src="/img/img/Logos/logo-avapex-transportes-v2.svg"
        />
        <a className="btn-primary text-sm whitespace-nowrap" href="#orcamento">
          <span className="md:hidden">Orçamento</span>
          <span className="hidden md:inline">Solicitar Orçamento</span>
        </a>
      </div>
    </header>
  )
}
