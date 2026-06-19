import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { WHATSAPP_TAIS } from '../../constants/contact'
import ContactForm from '../../components/ContactForm'

const BODY_HTML = `
<div class="fixed inset-0 z-[-1] bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMvA7dgqWh3-xmCipBojjKbHAn51zW70IlC-_qS_uwdPpyYyanUIBAQv5YAddxAGWmSsQpFHDRteaOWeFY_NhBJa3g4UIF4gXKrLRyVSdYuv_H8-_PwNxik3DT1JNC7omNsXSw7ScaqU-tuAADi7zkSSnxo14xwM7abgZ_eesd1FdJMn8897KaFgOe7byWCnvDee_wVZkN172YNezZjzLXSHfqluanqr-wIyAv41afope13koHLb4Rlr5RGoBdze-1jQ')] bg-cover bg-center bg-no-repeat">
<div class="absolute inset-0 bg-primary-container/85"></div>
</div>
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-primary-container/95 backdrop-blur-md border-b-2 border-primary shadow-[0_0_20px_rgba(243,190,85,0.2)]">
  <div class="flex items-center gap-2"><img alt="Avapex Logo" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlH1mvLD14N4U6ZeCFXXGwu5V9-Xncbzst5-GZt0N8ld2CNzZ0K6y2-jpxFNpJnU78RgA-QF1MtNHdFUsbWbx5POzXai9MeozDvtQDLCcbRFN6FaLnAlYYunk3IbuPL6MpxCmxLgd2RhDa4UOmm3_rmp-HWWF8VoGOn5DMus2BAnf4PH0It52CfBaCLZ4I2VW6jSn0oW0iYdrZ5oke-ETfvNoDhbYv_Xfv9NJbgJBXeEuRvQ1m8fg6Qdne4ZHxBMPFc3mg3bxH4Eyypg"></div>
  <a href="${WHATSAPP_TAIS}" target="_blank" rel="noopener noreferrer" class="bg-[#009B3A] text-white font-headline-lg-mobile text-[16px] md:text-[20px] uppercase px-4 md:px-8 py-2 md:py-3 rounded flex items-center gap-2 hover:scale-95 transition-transform">
    <span class="">orçar agora</span>
  </a>
</header>
<main class="w-full max-w-7xl mx-auto">
<!-- Hero Section -->
<!-- Equipment Roster Section -->
<section class="py-16 px-margin-mobile md:px-margin-desktop relative z-10 bg-transparent">
  <div class="flex items-center gap-4 mb-12">
    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase drop-shadow-md">Escalação Principal</h2>
    <div class="h-[2px] flex-grow bg-primary/30"></div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Player Card 1 -->
    <div class="flex flex-col relative overflow-hidden group bg-primary-container/60 backdrop-blur-sm p-4 rounded-lg border border-primary/20 hover:border-secondary transition-colors duration-300">
      <div class="absolute top-0 right-0 p-3 opacity-20 z-20">
        <span class="font-headline-lg text-headline-lg text-secondary">01</span>
      </div>
      <div class="h-40 md:h-48 w-full mb-4 relative z-10 overflow-hidden rounded">
        <img alt="EMPILHADEIRA DIESEL 16T" loading="lazy" decoding="async" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(243,190,85,0.2)]" src="/src/landing-pages/especial-copa/componentes/img/empilhadeira16.webp">
      </div>
      <h3 class="font-headline-lg-mobile text-[24px] text-white uppercase mb-1 drop-shadow-sm line-clamp-2">EMPILHADEIRA DIESEL 16T</h3>
      <div class="font-label-stats text-label-stats text-secondary mb-4 drop-shadow-sm mt-auto">ATAQUE / FORÇA BRUTA</div>
      <a href="${WHATSAPP_TAIS}" target="_blank" rel="noopener noreferrer" class="w-full bg-primary/10 backdrop-blur-sm border-2 border-primary text-primary font-headline-lg-mobile text-[18px] uppercase py-2 rounded hover:bg-primary hover:text-primary-container transition-all inline-flex items-center justify-center">
        ESCALE AGORA
      </a>
    </div>
    <!-- Player Card 2 -->
    <div class="flex flex-col relative overflow-hidden group bg-primary-container/60 backdrop-blur-sm p-4 rounded-lg border border-primary/20 hover:border-secondary transition-colors duration-300">
      <div class="absolute top-0 right-0 p-3 opacity-20 z-20">
        <span class="font-headline-lg text-headline-lg text-secondary">02</span>
      </div>
      <div class="h-40 md:h-48 w-full mb-4 relative z-10 overflow-hidden rounded bg-transparent">
        <img alt="empilhadeira diesel 7t" class="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(243,190,85,0.2)]" src="/src/landing-pages/especial-copa/componentes/img/empilhadeira7t.webp">
      </div>
      <h3 class="font-headline-lg-mobile text-[24px] text-white uppercase mb-1 drop-shadow-sm line-clamp-2">empilhadeira diesel 7t</h3>
      <div class="font-label-stats text-label-stats text-secondary mb-4 drop-shadow-sm mt-auto">MEIO-CAMPO / AGILIDADE</div>
      <a href="${WHATSAPP_TAIS}" target="_blank" rel="noopener noreferrer" class="w-full bg-primary/10 backdrop-blur-sm border-2 border-primary text-primary font-headline-lg-mobile text-[18px] uppercase py-2 rounded hover:bg-primary hover:text-primary-container transition-all inline-flex items-center justify-center">
        ESCALE AGORA
      </a>
    </div>
    <!-- Player Card 3 -->
    <div class="flex flex-col relative overflow-hidden group bg-primary-container/60 backdrop-blur-sm p-4 rounded-lg border border-primary/20 hover:border-secondary transition-colors duration-300">
      <div class="absolute top-0 right-0 p-3 opacity-20 z-20">
        <span class="font-headline-lg text-headline-lg text-secondary">03</span>
      </div>
      <div class="h-40 md:h-48 w-full mb-4 relative z-10 overflow-hidden rounded">
        <img alt="Empilhadeira Diesel 10T" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(243,190,85,0.2)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC41nfRP-bU_2M3dPnmS6v1pfdbiG1IukBIdOq8oNpQ4LB5UPMawpJx21NwhHNVATBzk_9Ts8fsL4HspyQbKUGDRhXNHlVLLYmOEN1OPaTrKLevCStn-JtRi_Pz6xkqlGzCCWWR1Pl7YXTt0WwWggiP_jDHuesMzK9aagd-9Bvw_plGl0jkQSKbU7IS4Uycv7WFLfwlzH-yqWI8lPpvJcgjnurBQhjn7vnyn7EFPiKUKaU-V5Poy2a83JpS-6Om9sHsDuo_tdesLPyBiw">
      </div>
      <h3 class="font-headline-lg-mobile text-[24px] text-white uppercase mb-1 drop-shadow-sm line-clamp-2">EMPILHADEIRA DIESEL 10T</h3>
      <div class="font-label-stats text-label-stats text-secondary mb-4 drop-shadow-sm mt-auto">MEIO-CAMPO / ESTABILIDADE</div>
      <a href="${WHATSAPP_TAIS}" target="_blank" rel="noopener noreferrer" class="w-full bg-primary/10 backdrop-blur-sm border-2 border-primary text-primary font-headline-lg-mobile text-[18px] uppercase py-2 rounded hover:bg-primary hover:text-primary-container transition-all inline-flex items-center justify-center">
        ESCALE AGORA
      </a>
    </div>
    <!-- Player Card 4 -->
    <div class="flex flex-col relative overflow-hidden group bg-primary-container/60 backdrop-blur-sm p-4 rounded-lg border border-primary/20 hover:border-secondary transition-colors duration-300">
      <div class="absolute top-0 right-0 p-3 opacity-20 z-20">
        <span class="font-headline-lg text-headline-lg text-secondary">04</span>
      </div>
      <div class="h-40 md:h-48 w-full mb-4 relative z-10 overflow-hidden rounded bg-primary-container/40">
        <img alt="Massive Munck truck lifting heavy cargo against a dark sky, powerful floodlights illuminating the boom arm, creating a dramatic silhouette emphasizing industrial strength." class="w-full h-full transform group-hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(243,190,85,0.2)] object-contain" data-alt="Massive Munck truck lifting heavy cargo against a dark sky, powerful floodlights illuminating the boom arm, creating a dramatic silhouette emphasizing industrial strength. Bold yellow and dark green palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk3SlRWlUkzwLJahE0GSxUvKdRocNtBskgY8nRCbTPumAc5yIIbgtdPr51gTbQLCPtB1lqX8XKIn0TEMS3y03q2r12tgAo2iH3N5_U6E4WtP_cUEX7o5Y_JRzSl6kJlLjjf_qPiruTAnQ5Oc75xtMv0dFLc4Ybx4MASBkz63K2fLiXmTg2_IqtdtGJgxlqyfaJFj-Y4bS_OsYWJJYEOtpNUNOfjQeD6fkuy_IOA9C6Q_gt_H49HA-bQ4V0nsCCAHbpGcNKVqowdH6oyA">
      </div>
      <h3 class="font-headline-lg-mobile text-[24px] text-white uppercase mb-1 drop-shadow-sm line-clamp-2">Caminhão Munck</h3>
      <div class="font-label-stats text-label-stats text-secondary mb-4 drop-shadow-sm mt-auto">DEFESA / ALCANCE</div>
      <a href="${WHATSAPP_TAIS}" target="_blank" rel="noopener noreferrer" class="w-full bg-primary/10 backdrop-blur-sm border-2 border-primary text-primary font-headline-lg-mobile text-[18px] uppercase py-2 rounded hover:bg-primary hover:text-primary-container transition-all inline-flex items-center justify-center">
        ESCALE AGORA
      </a>
    </div>
  </div>
</section>
<section class="py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-primary-container/40 backdrop-blur-md text-on-primary-container relative overflow-hidden">
  <div class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
  <div class="flex flex-col md:flex-row gap-12 items-center md:items-start">
    <div class="md:w-1/2">
      <h2 class="font-headline-lg-mobile md:font-headline-lg text-[48px] md:text-[120px] md:leading-[124px] text-primary uppercase mb-8 md:mb-0 leading-tight drop-shadow-md tracking-tight text-center">ENTRE EM CAMPO<br>COM A <span class="text-secondary">AVAPEX</span></h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 md:w-1/2">
      <div class="flex items-start gap-6">
        <div class="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-primary-container/80 flex items-center justify-center shrink-0 border border-primary/50 shadow-lg group hover:bg-secondary transition-colors duration-300">
          <span class="material-symbols-outlined text-secondary text-3xl md:text-4xl group-hover:text-primary-container transition-colors duration-300">local_shipping</span>
        </div>
        <div>
          <h4 class="font-title-md text-[24px] md:text-[28px] text-white mb-2 drop-shadow-sm">Entrega Rápida</h4>
          <p class="font-body-sm text-body-sm md:text-[18px] md:leading-relaxed text-primary-fixed-dim drop-shadow-sm">Logística otimizada para colocar o equipamento na sua obra em tempo recorde.</p>
        </div>
      </div>
      <div class="flex items-start gap-6">
        <div class="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-primary-container/80 flex items-center justify-center shrink-0 border border-primary/50 shadow-lg group hover:bg-secondary transition-colors duration-300">
          <span class="material-symbols-outlined text-secondary text-3xl md:text-4xl group-hover:text-primary-container transition-colors duration-300">build</span>
        </div>
        <div>
          <h4 class="font-title-md text-[24px] md:text-[28px] text-white mb-2 drop-shadow-sm">Frota Revisada</h4>
          <p class="font-body-sm text-body-sm md:text-[18px] md:leading-relaxed text-primary-fixed-dim drop-shadow-sm">Manutenção em dia garantindo performance máxima sem paradas imprevistas.</p>
        </div>
      </div>
      <div class="flex items-start gap-6">
        <div class="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-primary-container/80 flex items-center justify-center shrink-0 border border-primary/50 shadow-lg group hover:bg-secondary transition-colors duration-300">
          <span class="material-symbols-outlined text-secondary text-3xl md:text-4xl group-hover:text-primary-container transition-colors duration-300">support_agent</span>
        </div>
        <div>
          <h4 class="font-title-md text-[24px] md:text-[28px] text-white mb-2 drop-shadow-sm">Suporte 24/7</h4>
          <p class="font-body-sm text-body-sm md:text-[18px] md:leading-relaxed text-primary-fixed-dim drop-shadow-sm">Nossa equipe joga junto com você o tempo todo. Assistência a qualquer hora.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-tertiary-container/80 backdrop-blur-md relative border-t border-b border-tertiary shadow-xl my-12 rounded-xl mx-margin-mobile md:mx-0 overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMvA7dgqWh3-xmCipBojjKbHAn51zW70IlC-_qS_uwdPpyYyanUIBAQv5YAddxAGWmSsQpFHDRteaOWeFY_NhBJa3g4UIF4gXKrLRyVSdYuv_H8-_PwNxik3DT1JNC7omNsXSw7ScaqU-tuAADi7zkSSnxo14xwM7abgZ_eesd1FdJMn8897KaFgOe7byWCnvDee_wVZkN172YNezZjzLXSHfqluanqr-wIyAv41afope13koHLb4Rlr5RGoBdze-1jQ')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
  <div class="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
    <span class="material-symbols-outlined text-secondary text-[64px] md:text-[80px] mb-4 drop-shadow-md animate-bounce">emoji_events</span>
    <h2 class="font-headline-lg-mobile md:font-headline-lg text-[32px] md:text-[56px] md:leading-[60px] text-on-tertiary-container uppercase mb-4 drop-shadow-md">não deixe sua operação na reserva!</h2>
    <p class="font-title-md text-[24px] md:text-[32px] text-tertiary-fixed mb-10 drop-shadow-sm">CONDIÇÕES ESPECIAIS DE NEGOCIAÇÃO!</p>
    <a href="${WHATSAPP_TAIS}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto md:px-16 bg-secondary text-primary-container font-headline-lg-mobile text-[24px] uppercase py-4 md:py-5 rounded-lg hover:bg-secondary-fixed transition-all hover:scale-105 shadow-lg inline-flex items-center justify-center">
      APROVEITAR OFERTA
    </a>
  </div>
</section>
</main>
<footer class="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-base border-t-4 border-secondary dark:border-secondary-container mt-auto">
  <div class="mb-6 md:mb-0">
    <a class="inline-block cursor-pointer hover:opacity-80 transition-opacity" href="https://avapex.com"><img alt="Avapex Logo" class="h-16 md:h-20 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG3C_gaJBGgOtovSQn_1BVo4Fm9lEUax8CKaf7-n8YOWkcW6IJsxih88PyGh5gob0l9wD3iOVfk4_ncTolrKWIsq6idKU9ebyku4s8hjgWslero0t20qwelO7R7Pc7zQ7yHSNLBk98ySqSzdWoy2OH153ezFpQuhKJj9ziuu1EHDQtsG0NPoGcoDauCqhM6B5uLigOol-NYFWPRqWRFH3QtocP2FLTdjZIoxs2OUzgtp0vFbMJAmL0Orw5etOj1YlpWALfPY-aV2DfQA"></a>
  </div>
  <nav class="flex flex-wrap justify-center gap-6 mb-6 md:mb-0"></nav>
  <div class="font-body-sm text-body-sm text-center drop-shadow-sm"><span class="text-white font-bold text-opacity-80">© 2026 Avapex Transportes. Todos os direitos reservados.</span></div>
</footer>
`

const HEAD_STYLE_1 = `
.stadium-glow {
    background: radial-gradient(circle at top, rgba(243,190,85,0.15) 0%, transparent 70%);
}
.pitch-texture {
    background-image: repeating-linear-gradient(
        12deg,
        rgba(12, 50, 23, 0.5),
        rgba(12, 50, 23, 0.5) 40px,
        rgba(17, 20, 21, 0.5) 40px,
        rgba(17, 20, 21, 0.5) 80px
    );
}
.player-card {
    background: linear-gradient(180deg, #1d2021 0%, #111415 100%);
    border: 1px solid rgba(243,190,85,0.3);
    box-shadow: inset 0 20px 40px -20px rgba(243,190,85,0.1);
}
.text-glow {
    text-shadow: 0 0 20px rgba(243,190,85,0.5);
}
.pulse-urgent {
    animation: pulse-urgent 2s infinite;
}
@keyframes pulse-urgent {
    0% { box-shadow: 0 0 0 0 rgba(243,190,85,0.7); }
    70% { box-shadow: 0 0 0 10px rgba(243,190,85,0); }
    100% { box-shadow: 0 0 0 0 rgba(243,190,85,0); }
}
`

const HEAD_STYLE_2 = `
body {
  min-height: max(884px, 100dvh);
}
`

export default function LandingEspecialCopa() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Avapex Transportes - Especial Copa</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
        <link href="https://fonts.googleapis.com/css2?family=Anton:wght@400;500;700&amp;family=Hanken+Grotesk:wght@400;500;700&amp;family=Jetbrains+Mono:wght@400;500;700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&amp;family=Hanken+Grotesk:wght@400;700&amp;family=JetBrains+Mono:wght@700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <style>{HEAD_STYLE_1}</style>
        <style>{HEAD_STYLE_2}</style>
        <style>{` .lp-raw, .lp-raw * { color: #ffffff !important; font-weight: 700 !important; } .lp-raw svg { fill: #ffffff !important; stroke: #ffffff !important; } `}</style>
      </Helmet>

      <div className="lp-raw" dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <ContactForm />
    </HelmetProvider>
  )
}
