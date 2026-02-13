document.addEventListener('DOMContentLoaded', () => {
    // Inicializar ícones do pacote Lucide
    lucide.createIcons();

    // --- Lógica do Menu Mobile ---
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = mobileMenu.querySelectorAll('a');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
    
    // Fechar menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // --- Lógica de Scroll (Mudar cor do Header) ---
    const header = document.getElementById('main-header');
    const headerLogo = document.getElementById('header-logo');
    const desktopMenu = document.getElementById('desktop-menu');
    const menuBtnIcon = document.querySelector('#menuBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Estado ROLADO (Fundo Branco, Texto Escuro)
            header.classList.add('scrolled'); // Usa a classe CSS para o background
            header.classList.remove('bg-navy/95', 'py-4', 'border-slate-700');
            
            // Logo Colorida
            if (headerLogo) headerLogo.classList.remove('brightness-0', 'invert');
            
            // Texto do Menu Escuro
            if (desktopMenu) {
                desktopMenu.classList.remove('text-slate-300');
                desktopMenu.classList.add('text-navy');
            }
            
            // Ícone do Mobile Escuro
            if (menuBtnIcon) {
                menuBtnIcon.classList.remove('text-white');
                menuBtnIcon.classList.add('text-navy');
            }
        } else {
            // Estado TOPO (Fundo Escuro Transparente)
            header.classList.remove('scrolled');
            header.classList.add('bg-navy/95', 'py-4', 'border-slate-700');
            
            // Logo Branca
            if (headerLogo) headerLogo.classList.add('brightness-0', 'invert');
            
            // Texto do Menu Claro
            if (desktopMenu) {
                desktopMenu.classList.add('text-slate-300');
                desktopMenu.classList.remove('text-navy');
            }
            
            // Ícone do Mobile Branco
            if (menuBtnIcon) {
                menuBtnIcon.classList.add('text-white');
                menuBtnIcon.classList.remove('text-navy');
            }
        }
    });
});