document.addEventListener("DOMContentLoaded", function() {
    
    const productoSlider = new Swiper('.myProductoSlider', {
        // Configuraciones base (Móvil por defecto)
        slidesPerView: 1, 
        spaceBetween: 0, // Sin espacio entre imágenes como en tu foto
        loop: true,      // Para que sea infinito
        
        // Se mueve cada 5 segundos (5000 ms) automáticamente
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // Sigue funcionando aunque el usuario toque los puntos
        },
        
        // Puntos de navegación
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // No añadimos 'navigation' para evitar las flechas
        
        // Responsive (se adapta según el tamaño de la pantalla)
        breakpoints: {
            // En tablets (>= 768px)
            768: {
                slidesPerView: 2,
            },
            // En computadoras (>= 1024px)
            1024: {
                slidesPerView: 4, 
            }
        }
    });

});