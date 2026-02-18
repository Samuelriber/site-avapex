document.addEventListener("DOMContentLoaded", () => {
  // Lucide
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // Menu mobile
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  const toggleMenu = () => {
    mobileMenu?.classList.toggle("hidden");
  };

  menuBtn?.addEventListener("click", toggleMenu);
  closeBtn?.addEventListener("click", toggleMenu);
  mobileMenu?.querySelectorAll("a")?.forEach((a) => a.addEventListener("click", toggleMenu));

  // Header scroll
  const header = document.getElementById("main-header");
  const headerLogo = document.getElementById("header-logo");
  const desktopMenu = document.getElementById("desktop-menu");
  const menuBtnIcon = document.querySelector("#menuBtn");

  const onScroll = () => {
    if (window.scrollY > 50) {
      header?.classList.add("scrolled");
      header?.classList.remove("bg-navy/95", "py-4", "border-slate-700");

      headerLogo?.classList.remove("brightness-0", "invert");

      desktopMenu?.classList.remove("text-slate-300");
      desktopMenu?.classList.add("text-navy");

      menuBtnIcon?.classList.remove("text-white");
      menuBtnIcon?.classList.add("text-navy");
    } else {
      header?.classList.remove("scrolled");
      header?.classList.add("bg-navy/95", "py-4", "border-slate-700");

      headerLogo?.classList.add("brightness-0", "invert");

      desktopMenu?.classList.add("text-slate-300");
      desktopMenu?.classList.remove("text-navy");

      menuBtnIcon?.classList.add("text-white");
      menuBtnIcon?.classList.remove("text-navy");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
