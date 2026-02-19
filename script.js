document.addEventListener("DOMContentLoaded", () => {
  // Inicialização Segura dos Ícones
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Elementos do DOM (Cacheados para melhor performance)
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuLinks = mobileMenu?.querySelectorAll("a");
  
  const header = document.getElementById("main-header");
  const headerLogo = document.getElementById("header-logo");
  const desktopMenu = document.getElementById("desktop-menu");
  const menuBtnIcon = document.querySelector("#menuBtn");

  // ==========================================
  // Lógica do Menu Mobile
  // ==========================================
  const toggleMenu = () => {
    mobileMenu?.classList.toggle("hidden");
  };

  menuBtn?.addEventListener("click", toggleMenu);
  closeBtn?.addEventListener("click", toggleMenu);
  menuLinks?.forEach((a) => a.addEventListener("click", toggleMenu));

  // ==========================================
  // Lógica de Scroll (Otimizada com requestAnimationFrame)
  // Troca inteligente da Logo Original Branca para Escura
  // ==========================================
  let ticking = false;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Quando rolar a página (Fundo Branco)
      header?.classList.add("scrolled", "bg-white");
      header?.classList.remove("bg-[#0f172a]/95", "py-4", "border-slate-700");

      // Troca para a logo preta e amarela (Se já não estiver)
      if (headerLogo && headerLogo.getAttribute("src") !== "img/AVAPEX OFICIAL 01.png") {
        headerLogo.src = "img/AVAPEX OFICIAL 01.png";
      }

      desktopMenu?.classList.replace("text-slate-300", "text-[#0f172a]");
      menuBtnIcon?.classList.replace("text-white", "text-[#0f172a]");

    } else {
      // Quando voltar para o topo (Fundo Azul Escuro)
      header?.classList.remove("scrolled", "bg-white");
      header?.classList.add("bg-[#0f172a]/95", "py-4", "border-slate-700");

      // Volta para a logo branca e amarela (Se já não estiver)
      if (headerLogo && headerLogo.getAttribute("src") !== "img/AVAPEX OFICIAL 02 branca e amarela.png") {
        headerLogo.src = "img/AVAPEX OFICIAL 02 branca e amarela.png";
      }

      desktopMenu?.classList.replace("text-[#0f172a]", "text-slate-300");
      menuBtnIcon?.classList.replace("text-[#0f172a]", "text-white");
    }
    
    // Libera a próxima atualização de frame
    ticking = false;
  };

  // Event Listener Otimizado
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  // Executar a verificação inicial caso a página carregue no meio
  handleScroll();
});