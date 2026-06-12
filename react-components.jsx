// ============================================================
//  react-components.jsx
//  Componentes React: ContactForm (EmailJS) · FAQSection · CookieBanner
//  Montagem via ReactDOM.createRoot nos roots definidos no HTML
// ============================================================

// ─── CONFIG EMAILJS ─────────────────────────────────────────
// 1. Crie conta gratuita em https://www.emailjs.com/
// 2. Crie um Email Service e anote o Service ID
// 3. Crie um Email Template com as variáveis abaixo e anote o Template ID
// 4. Em Account > API Keys, copie a Public Key
// 5. Substitua os valores abaixo pelos seus
const EMAILJS_CONFIG = {
  serviceId:  'SEU_SERVICE_ID',   // ex: 'service_abc123'
  templateId: 'SEU_TEMPLATE_ID',  // ex: 'template_xyz789'
  publicKey:  'SUA_PUBLIC_KEY',   // ex: 'AbCdEfGhIjKlMnOp'
};

// Variáveis esperadas no template EmailJS:
//  {{from_name}}      → Nome completo
//  {{from_company}}   → Empresa
//  {{from_phone}}     → Telefone
//  {{reply_to}}       → E-mail (usado também como Reply-To)
//  {{service_type}}   → Serviço de interesse
//  {{message}}        → Mensagem

// ─── CARREGAR SDK EMAILJS DINAMICAMENTE ─────────────────────
(function loadEmailJS() {
  if (window.emailjs) return;
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  s.onload = () => window.emailjs.init(EMAILJS_CONFIG.publicKey);
  document.head.appendChild(s);
})();

// ════════════════════════════════════════════════════════════
//  CONTACT FORM
// ════════════════════════════════════════════════════════════
function ContactForm() {
  const { useState, useRef } = React;

  const SERVICES = [
    'Transporte Rodoviário',
    'Intralogística',
    'Locação de Equipamentos',
    'Içamento de Cargas',
    'Apoio Logístico (Comboio)',
    'Cargas Especiais',
    'Outro',
  ];

  const INITIAL = {
    from_name: '',
    from_company: '',
    from_phone: '',
    reply_to: '',
    service_type: '',
    message: '',
  };

  const [fields, setFields]     = useState(INITIAL);
  const [errors, setErrors]     = useState({});
  const [status, setStatus]     = useState('idle'); // idle | loading | success | error
  const formRef                 = useRef(null);

  // ── Validação ──────────────────────────────────────────
  const validate = (data) => {
    const e = {};
    if (!data.from_name.trim())    e.from_name    = 'Informe seu nome.';
    if (!data.from_phone.trim())   e.from_phone   = 'Informe seu telefone.';
    if (!data.reply_to.trim())     e.reply_to     = 'Informe seu e-mail.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.reply_to))
                                   e.reply_to     = 'E-mail inválido.';
    if (!data.service_type)        e.service_type = 'Selecione um serviço.';
    if (!data.message.trim())      e.message      = 'Descreva sua necessidade.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  // ── Submit ─────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(fields);
    if (Object.keys(validation).length) { setErrors(validation); return; }

    setStatus('loading');
    try {
      await window.emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        fields,
      );
      setStatus('success');
      setFields(INITIAL);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const reset = () => setStatus('idle');

  // ── Helpers de estilo ──────────────────────────────────
  const inputBase =
    'w-full bg-[#0F1A2E] border rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-200';
  const inputOk    = `${inputBase} border-slate-700 focus:border-yellow-400 focus:ring-yellow-400/20`;
  const inputError = `${inputBase} border-red-500/70 focus:border-red-500 focus:ring-red-500/20`;

  const cls = (field) => errors[field] ? inputError : inputOk;

  // ── Tela de sucesso ────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="bg-[#0F1A2E] border border-slate-700/60 rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-6 min-h-[480px]">
        <div className="w-20 h-20 rounded-full bg-yellow-400/10 border-2 border-yellow-400 flex items-center justify-center">
          <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-white mb-2">Mensagem Enviada!</h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
            Recebemos sua solicitação. Nossa equipe comercial entrará em contato em breve.
          </p>
        </div>
        <button
          onClick={reset}
          className="mt-2 text-yellow-400 text-sm font-bold border border-yellow-400/40 px-6 py-2.5 rounded-full hover:bg-yellow-400 hover:text-[#0f172a] transition-all duration-200"
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  // ── Tela de erro ───────────────────────────────────────
  if (status === 'error') {
    return (
      <div className="bg-[#0F1A2E] border border-red-500/40 rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-6 min-h-[480px]">
        <div className="w-20 h-20 rounded-full bg-red-500/10 border-2 border-red-500/60 flex items-center justify-center">
          <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-white mb-2">Falha no Envio</h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
            Não foi possível enviar a mensagem. Tente novamente ou entre em contato pelo WhatsApp.
          </p>
        </div>
        <button
          onClick={reset}
          className="mt-2 text-white text-sm font-bold border border-slate-600 px-6 py-2.5 rounded-full hover:bg-slate-700 transition-all duration-200"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  // ── Formulário ─────────────────────────────────────────
  return (
    <div className="bg-[#0F1A2E] border border-slate-700/60 rounded-3xl p-8 md:p-10 shadow-2xl" data-aos="fade-left">

      <div className="mb-8">
        <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Formulário de Contato</span>
        <h3 className="text-white text-2xl font-extrabold mt-1">Solicite sua Proposta</h3>
        <p className="text-slate-500 text-sm mt-1">Resposta em até 1 dia útil.</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">

        {/* Nome + Empresa */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-slate-400 text-xs font-semibold block mb-1.5">
              Nome completo <span className="text-yellow-400">*</span>
            </label>
            <input
              type="text" name="from_name" value={fields.from_name}
              onChange={handleChange} placeholder="João da Silva"
              className={cls('from_name')}
            />
            {errors.from_name && <p className="text-red-400 text-xs mt-1">{errors.from_name}</p>}
          </div>
          <div>
            <label className="text-slate-400 text-xs font-semibold block mb-1.5">Empresa</label>
            <input
              type="text" name="from_company" value={fields.from_company}
              onChange={handleChange} placeholder="Razão Social"
              className={inputOk}
            />
          </div>
        </div>

        {/* Telefone + E-mail */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-slate-400 text-xs font-semibold block mb-1.5">
              Telefone / WhatsApp <span className="text-yellow-400">*</span>
            </label>
            <input
              type="tel" name="from_phone" value={fields.from_phone}
              onChange={handleChange} placeholder="(31) 9 0000-0000"
              className={cls('from_phone')}
            />
            {errors.from_phone && <p className="text-red-400 text-xs mt-1">{errors.from_phone}</p>}
          </div>
          <div>
            <label className="text-slate-400 text-xs font-semibold block mb-1.5">
              E-mail <span className="text-yellow-400">*</span>
            </label>
            <input
              type="email" name="reply_to" value={fields.reply_to}
              onChange={handleChange} placeholder="contato@empresa.com.br"
              className={cls('reply_to')}
            />
            {errors.reply_to && <p className="text-red-400 text-xs mt-1">{errors.reply_to}</p>}
          </div>
        </div>

        {/* Serviço */}
        <div>
          <label className="text-slate-400 text-xs font-semibold block mb-1.5">
            Serviço de interesse <span className="text-yellow-400">*</span>
          </label>
          <select
            name="service_type" value={fields.service_type}
            onChange={handleChange}
            className={`${cls('service_type')} appearance-none cursor-pointer`}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
          >
            <option value="">Selecione um serviço...</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service_type && <p className="text-red-400 text-xs mt-1">{errors.service_type}</p>}
        </div>

        {/* Mensagem */}
        <div>
          <label className="text-slate-400 text-xs font-semibold block mb-1.5">
            Descreva sua necessidade <span className="text-yellow-400">*</span>
          </label>
          <textarea
            name="message" value={fields.message}
            onChange={handleChange} rows={4}
            placeholder="Detalhe volumes, rotas, frequência ou qualquer informação relevante para sua operação..."
            className={`${cls('message')} resize-none`}
          />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-yellow-400 text-[#0f172a] font-extrabold py-4 rounded-xl hover:bg-yellow-300 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 text-sm shadow-lg shadow-yellow-400/20 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              Enviar Solicitação
            </>
          )}
        </button>

        <p className="text-slate-600 text-xs text-center pt-1">
          Suas informações são confidenciais e não serão compartilhadas com terceiros.
        </p>

      </form>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
//  FAQ SECTION
// ════════════════════════════════════════════════════════════
function FAQSection() {
  const { useState } = React;

  const faqs = [
    {
      q: 'Quais regiões a Avapex atende?',
      a: 'Atendemos todo o território nacional com foco na região Sudeste. Contamos com matriz em Conselheiro Lafaiete/MG, posto avançado em BH, filiais em SP e RJ, e unidades de apoio em Juatuba/MG e Ipatinga/MG.',
    },
    {
      q: 'A Avapex possui certificação de qualidade?',
      a: 'Sim. Somos certificados pela ISO 9001, garantindo padronização de processos, rastreabilidade operacional e comprometimento com a melhoria contínua.',
    },
    {
      q: 'Como funciona a locação de equipamentos?',
      a: 'Oferecemos locação com ou sem operador (mão de obra). O contrato define o período, as condições de uso e os SLAs de disponibilidade. Entre em contato para uma proposta personalizada.',
    },
    {
      q: 'A empresa atende ao setor de mineração?',
      a: 'Sim. A mineração é um dos nossos principais segmentos. Atendemos empresas como Vale, Usiminas e RHI Magnesita com equipamentos e operadores qualificados para ambientes de alta exigência.',
    },
    {
      q: 'Qual o prazo para receber uma proposta comercial?',
      a: 'Após o envio do formulário ou contato direto, nossa equipe retorna em até 1 dia útil com uma proposta inicial. Demandas complexas podem exigir visita técnica.',
    },
    {
      q: 'A Avapex oferece suporte 24 horas?',
      a: 'Sim. Nosso suporte operacional funciona 24/7 para garantir a continuidade das operações dos nossos clientes, especialmente em contratos de longa duração.',
    },
  ];

  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => (
        <div
          key={i}
          className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'border-yellow-400/50 bg-yellow-400/5' : 'border-slate-200 bg-white hover:border-slate-300'}`}
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
            aria-expanded={open === i}
          >
            <span className={`font-bold text-sm md:text-base transition-colors ${open === i ? 'text-[#0f172a]' : 'text-slate-700'}`}>
              {item.q}
            </span>
            <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-yellow-400 rotate-45' : 'bg-slate-100'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? '200px' : '0px' }}
          >
            <p className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ════════════════════════════════════════════════════════════
//  COOKIE BANNER
// ════════════════════════════════════════════════════════════
function CookieBanner() {
  const { useState, useEffect } = React;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem('avapex_cookies_accepted')) setVisible(true);
    } catch (_) { setVisible(true); }
  }, []);

  const accept = () => {
    try { localStorage.setItem('avapex_cookies_accepted', '1'); } catch (_) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#0f172a] border-t border-slate-700 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
      <p className="text-slate-300 text-sm flex-1 leading-relaxed">
        Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{' '}
        <a href="#" className="text-yellow-400 underline underline-offset-2 hover:text-yellow-300">Política de Privacidade</a>.
      </p>
      <div className="flex gap-3 flex-shrink-0">
        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 text-xs px-4 py-2 rounded-full border border-slate-700 hover:border-slate-500 transition-colors"
        >
          Recusar
        </button>
        <button
          onClick={accept}
          className="bg-yellow-400 text-[#0f172a] text-xs font-extrabold px-5 py-2 rounded-full hover:bg-yellow-300 transition-colors"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
//  MONTAGEM DOS COMPONENTES
// ════════════════════════════════════════════════════════════
const mount = (id, Component) => {
  const el = document.getElementById(id);
  if (el) ReactDOM.createRoot(el).render(React.createElement(Component));
};

mount('form-root',   ContactForm);
mount('faq-root',    FAQSection);
mount('cookie-root', CookieBanner);
