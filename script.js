document.addEventListener('DOMContentLoaded', function() {

    // --- 1. HEADER SCROLL EFFECT ---
    // (Tu código existente, no se toca)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. PARTICLE GENERATION ---
    // (Tu código existente, no se toca)
    const particleContainer = document.getElementById('particle-container');
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particleContainer.appendChild(particle);
    }

    // --- 3. SCROLL-REVEAL ANIMATIONS ---
    // (Tu código existente, no se toca)
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- 4. HAMBURGER MENU LOGIC (NUEVO) ---
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    // Evento para abrir/cerrar el menú
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Opcional: Cerrar el menú al hacer clic en un enlace (muy útil para SPAs)
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
});