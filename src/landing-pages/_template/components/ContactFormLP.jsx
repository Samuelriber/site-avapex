import React from 'react';

export default function ContactFormLP() {
  return (
    <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Lado Esquerdo: Informações de Contato */}
        <div className="flex-1 flex flex-col w-full">
          <span className="font-label-stats text-label-stats text-secondary mb-2 drop-shadow-sm uppercase">
            Contato Direto
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-[40px] md:text-[56px] text-primary uppercase drop-shadow-md mb-4 leading-tight">
            Receba uma Proposta<br />Comercial
          </h2>
          <p className="font-body-sm text-[16px] md:text-[18px] text-primary-fixed-dim drop-shadow-sm mb-8 max-w-lg">
            Nossa equipe de engenharia logística está pronta para analisar sua demanda e desenhar a operação com o melhor custo-benefício.
          </p>

          {/* Box de Contatos */}
          <div className="flex flex-col gap-4 mb-8">
            {/* Central de Atendimento */}
            <div className="flex items-center gap-4 bg-primary-container/60 backdrop-blur-sm p-4 rounded-lg border border-primary/20 hover:border-secondary transition-colors duration-300 group">
              <div className="w-12 h-12 rounded bg-primary-container/80 flex items-center justify-center shrink-0 border border-primary/50 shadow-[0_0_10px_rgba(243,190,85,0.1)] group-hover:bg-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-secondary group-hover:text-primary-container transition-colors duration-300">call</span>
              </div>
              <div>
                <p className="font-title-md text-[14px] text-white/70 uppercase tracking-wider">Central de Atendimento</p>
                <a href="tel:+5531984657066" className="font-headline-lg-mobile text-[20px] text-primary hover:text-secondary transition-colors drop-shadow-sm">
                  (31) 98465-7066
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-center gap-4 bg-primary-container/60 backdrop-blur-sm p-4 rounded-lg border border-primary/20 hover:border-secondary transition-colors duration-300 group">
              <div className="w-12 h-12 rounded bg-primary-container/80 flex items-center justify-center shrink-0 border border-primary/50 shadow-[0_0_10px_rgba(243,190,85,0.1)] group-hover:bg-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-secondary group-hover:text-primary-container transition-colors duration-300">mail</span>
              </div>
              <div>
                <p className="font-title-md text-[14px] text-white/70 uppercase tracking-wider">E-mail Corporativo</p>
                <a href="mailto:comercial3@avapex.com.br" className="font-body-sm text-[16px] text-white hover:text-primary transition-colors">
                  comercial3@avapex.com.br
                </a>
              </div>
            </div>

            {/* Endereço */}
            <div className="flex items-center gap-4 bg-primary-container/60 backdrop-blur-sm p-4 rounded-lg border border-primary/20 hover:border-secondary transition-colors duration-300 group">
              <div className="w-12 h-12 rounded bg-primary-container/80 flex items-center justify-center shrink-0 border border-primary/50 shadow-[0_0_10px_rgba(243,190,85,0.1)] group-hover:bg-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-secondary group-hover:text-primary-container transition-colors duration-300">location_on</span>
              </div>
              <div>
                <p className="font-title-md text-[14px] text-white/70 uppercase tracking-wider">Matriz</p>
                <p className="font-body-sm text-[16px] text-white">
                  Rodovia BR040, 22750, Barreira - Cons. Lafaiete/MG
                </p>
              </div>
            </div>
          </div>

          {/* Mapa Embutido */}
          <div className="w-full h-48 rounded-lg overflow-hidden border border-primary/20 relative shadow-[0_0_20px_rgba(243,190,85,0.1)] opacity-80 hover:opacity-100 transition-opacity">
            <iframe 
              title="Mapa Avapex"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.646894000305!2d-43.7845!3d-20.6588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM5JzMxLjciUyA0M8KwNDcnMDQuMiJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Lado Direito: Formulário com Glassmorphism (Especial Copa theme) */}
        <div className="flex-1 w-full">
          <div className="bg-primary-container/60 backdrop-blur-md rounded-xl p-6 md:p-8 border border-primary/30 shadow-[0_0_30px_rgba(243,190,85,0.15)] relative overflow-hidden">
            {/* Efeito de brilho no fundo do form (Neon Glow) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            
            <h3 className="font-headline-lg-mobile text-[28px] text-white uppercase mb-6 drop-shadow-sm border-b border-primary/20 pb-4">
              Solicite um Orçamento
            </h3>
            
            <form className="flex flex-col gap-5 relative z-10">
              {/* Grid 2 colunas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-title-md text-[13px] text-white/80 uppercase tracking-wider">Nome do Responsável *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-primary-container/40 border border-primary/30 rounded p-3 text-white outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder-white/30 backdrop-blur-sm"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-title-md text-[13px] text-white/80 uppercase tracking-wider">Empresa *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-primary-container/40 border border-primary/30 rounded p-3 text-white outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder-white/30 backdrop-blur-sm"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-title-md text-[13px] text-white/80 uppercase tracking-wider">E-mail Profissional *</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-primary-container/40 border border-primary/30 rounded p-3 text-white outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder-white/30 backdrop-blur-sm"
                    placeholder="email@empresa.com"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-title-md text-[13px] text-white/80 uppercase tracking-wider">Telefone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full bg-primary-container/40 border border-primary/30 rounded p-3 text-white outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder-white/30 backdrop-blur-sm"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              {/* Select */}
              <div className="flex flex-col gap-1.5">
                <label className="font-title-md text-[13px] text-white/80 uppercase tracking-wider">Em qual área podemos ajudar? *</label>
                <div className="relative">
                  <select 
                    required 
                    className="w-full bg-primary-container/40 border border-primary/30 rounded p-3 text-white outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all backdrop-blur-sm appearance-none cursor-pointer [&>option]:bg-primary-container [&>option]:text-white"
                  >
                    <option value="" disabled selected>Selecione uma opção...</option>
                    <option value="locacao">Locação de Equipamentos</option>
                    <option value="transporte">Transporte Pesado</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="outros">Outros</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-primary pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Textarea */}
              <div className="flex flex-col gap-1.5">
                <label className="font-title-md text-[13px] text-white/80 uppercase tracking-wider">Detalhes da Demanda</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-primary-container/40 border border-primary/30 rounded p-3 text-white outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder-white/30 backdrop-blur-sm resize-none"
                  placeholder="Descreva brevemente o que você precisa..."
                ></textarea>
              </div>

              {/* Botão Enviar */}
              <button 
                type="submit" 
                className="w-full bg-secondary text-primary-container font-headline-lg-mobile text-[20px] uppercase py-4 rounded hover:bg-secondary-fixed transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(243,190,85,0.4)] mt-2"
              >
                Enviar Solicitação
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}