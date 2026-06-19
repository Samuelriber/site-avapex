import { WHATSAPP_TAIS } from '../../../constants/contact'

export default function CopaHeader() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 backdrop-blur-md border-b-2"
      style={{
        background: 'rgba(17,20,21,0.95)',
        borderColor: '#F3BE55',
        boxShadow: '0 0 20px rgba(243,190,85,0.2)',
      }}
    >
      <img
        alt="Avapex Logo"
        className="h-12 w-auto object-contain"
        src="/img/img/Logos/logo-avapex-transportes-v2.svg"
      />

      <a
        href={WHATSAPP_TAIS}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-base md:text-xl font-bold uppercase px-4 md:px-8 py-2 md:py-3 rounded flex items-center gap-2 hover:scale-95 transition-transform"
        style={{ background: '#009B3A', fontFamily: 'Anton, sans-serif' }}
      >
        Orçar Agora
      </a>
    </header>
  )
}
