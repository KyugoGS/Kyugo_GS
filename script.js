document.addEventListener('DOMContentLoaded', function() {

    // Animación de aparición para las tarjetas de proyecto
    const projectCards = document.querySelectorAll('.proyecto-card');

    const observerOptions = {
        root: null, // usa el viewport como el área de observación
        rootMargin: '0px',
        threshold: 0.1 // el elemento se considera visible si al menos el 10% está en pantalla
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Dejar de observar una vez que la animación se ha ejecutado
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        observer.observe(card);
    });

});