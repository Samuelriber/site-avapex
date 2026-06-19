import { WHATSAPP_TAIS } from '../../../constants/contact'

const BG_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDMvA7dgqWh3-xmCipBojjKbHAn51zW70IlC-_qS_uwdPpyYyanUIBAQv5YAddxAGWmSsQpFHDRteaOWeFY_NhBJa3g4UIF4gXKrLRyVSdYuv_H8-_PwNxik3DT1JNC7omNsXSw7ScaqU-tuAADi7zkSSnxo14xwM7abgZ_eesd1FdJMn8897KaFgOe7byWCnvDee_wVZkN172YNezZjzLXSHfqluanqr-wIyAv41afope13koHLb4Rlr5RGoBdze-1jQ'

export default function CopaCTA() {
  return (
    <section
      className="py-16 md:py-24 px-6 md:px-20 relative border-y shadow-xl my-12 mx-6 md:mx-0 rounded-xl overflow-hidden"
      style={{
        background: 'rgba(12,26,14,0.85)',
        backdropFilter: 'blur(12px)',
        borderColor: 'rgba(0,155,58,0.45)',
      }}
    >
      {/* textura de fundo sutil */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${BG_URL})` }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* troféu animado */}
        <span
          className="copa-trophy text-[64px] md:text-[80px] mb-4 drop-shadow-md select-none"
          aria-hidden="true"
        >
          🏆
        </span>

        <h2
          className="text-[32px] md:text-[56px] md:leading-[60px] text-white uppercase mb-4 drop-shadow-md"
        >
          Não deixe sua operação na reserva!
        </h2>

        <p
          className="text-2xl md:text-[32px] font-bold mb-10 drop-shadow-sm"
          style={{ color: '#F3BE55' }}
        >
          CONDIÇÕES ESPECIAIS DE NEGOCIAÇÃO!
        </p>

        <a
          href={WHATSAPP_TAIS}
          target="_blank"
          rel="noopener noreferrer"
          className="copa-cta-btn w-full md:w-auto md:px-16 text-[24px] font-bold uppercase py-4 md:py-5 rounded-lg shadow-lg inline-flex items-center justify-center"
        >
          APROVEITAR OFERTA
        </a>
      </div>
    </section>
  )
}
