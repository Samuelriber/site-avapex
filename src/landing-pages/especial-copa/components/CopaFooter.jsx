export default function CopaFooter() {
  return (
    <footer
      className="w-full py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t-4"
      style={{ borderColor: '#009B3A', background: 'rgba(17,20,21,0.92)', backdropFilter: 'blur(8px)' }}
    >
      <a href="https://avapex.com" className="inline-block hover:opacity-80 transition-opacity">
        <img
          alt="Avapex Logo"
          className="h-16 md:h-20 w-auto object-contain"
          src="/img/img/Logos/logo-avapex-transportes-v2.svg"
        />
      </a>

      <nav aria-hidden="true" />

      <p className="text-sm font-bold text-white text-center">
        © 2026 Avapex Transportes. Todos os direitos reservados.
      </p>
    </footer>
  )
}
