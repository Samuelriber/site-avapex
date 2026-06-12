document.addEventListener("DOMContentLoaded", () => {
  // Ícones
  if (window.lucide) window.lucide.createIcons();

  // Animações de entrada suaves
  if (window.AOS) {
    AOS.init({ once: true, duration: 600, offset: 50 });
  }

  // --- MENU MOBILE ---
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");
  const toggleMenu = () => mobileMenu?.classList.toggle("hidden");
  
  menuBtn?.addEventListener("click", toggleMenu);
  closeBtn?.addEventListener("click", toggleMenu);
  mobileMenu?.querySelectorAll("a").forEach(a => a.addEventListener("click", toggleMenu));

  // --- BOTÃO VOLTAR AO TOPO ---
  const backToTopBtn = document.getElementById("backToTop");
  backToTopBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ==============================================================
  // SOLUÇÃO DE PERFORMANCE ABSOLUTA PARA EVENTO DE ROLAGEM
  // Utilizando IntersectionObserver (Zero lag na rolagem de tela)
  // ==============================================================
  
  const header = document.getElementById("main-header");
  const desktopMenu = document.getElementById("desktop-menu");
  
  // Observador do Cabeçalho (Muda quando passa de 60px)
  const headerTrigger = document.getElementById("header-trigger");
  if (headerTrigger && header) {
    const headerObserver = new IntersectionObserver((entries) => {
      // Se a "linha" sumiu para cima, aplica o fundo branco
      if (!entries[0].isIntersecting) {
        header.classList.add("scrolled");
        menuBtn?.classList.remove("text-white");
        menuBtn?.classList.add("text-[#0f172a]");
      } else {
        // Se voltou pro topo, aplica o fundo transparente/escuro
        header.classList.remove("scrolled");
        menuBtn?.classList.add("text-white");
        menuBtn?.classList.remove("text-[#0f172a]");
      }
    }, { threshold: 0 }); // Dispara no exato pixel
    
    headerObserver.observe(headerTrigger);
  }

  // Observador do Botão "Voltar ao Topo" (Aparece após rolar 400px)
  const btnTrigger = document.getElementById("backtotop-trigger");
  if (btnTrigger && backToTopBtn) {
    const btnObserver = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        backToTopBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-10");
      } else {
        backToTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-10");
      }
    });
    
    btnObserver.observe(btnTrigger);
  }
});