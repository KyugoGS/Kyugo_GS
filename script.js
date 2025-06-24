document.addEventListener('DOMContentLoaded', function() {

    // --- 1. HEADER SCROLL EFFECT ---
    // Cambia el estilo del header cuando el usuario hace scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. PARTICLE GENERATION ---
    // Crea dinámicamente las partículas para el fondo del hero
    const particleContainer = document.getElementById('particle-container');
    const particleCount = 100; // Número de partículas

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        
        // Asigna tamaño, posición y duración de animación aleatorios
        const size = Math.random() * 4 + 1; // Tamaño entre 1px y 5px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`; // Duración entre 3s y 8s
        particle.style.animationDelay = `${Math.random() * 3}s`; // Retraso hasta 3s

        particleContainer.appendChild(particle);
    }

    // --- 3. SCROLL-REVEAL ANIMATIONS ---
    // Anima los elementos para que aparezcan cuando entran en la pantalla
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // El elemento se activa cuando el 10% es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'is-visible' para activar la animación CSS
                entry.target.classList.add('is-visible');
                // Deja de observar el elemento una vez animado para mejorar el rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa cada elemento que necesita ser animado
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});