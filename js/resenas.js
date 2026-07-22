/* ==================== INICIALIZACIÓN DE SWIPER (RESEÑAS) ==================== */

var swiperResenas = new Swiper(".sliderResenas", {
    slidesPerView: 1, /* 1 captura en celulares */
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000, 
        disableOnInteraction: false, 
    },
    pagination: {
        el: ".resenas-pagination",
        clickable: true,
    },
    breakpoints: {
        /* Celulares grandes y tablets verticales: 2 columnas */
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        /* Laptops y pantallas de PC (>= 992px): 3 columnas fijas */
        992: {
            slidesPerView: 3,
            spaceBetween: 30, /* Un poco más de espacio entre ellas ya que son más grandes */
        },
    },
});

/* ==================== LIGHTBOX (AMPLIAR IMÁGENES) ==================== */

// Escuchamos los clics en todo el documento
document.addEventListener('click', function(e) {
    // Verificamos si el elemento clickeado tiene la clase 'img-lightbox'
    if(e.target && e.target.classList.contains('img-lightbox')) {
        
        // 1. Obtenemos la ruta (src) de la imagen a la que el usuario le dio clic
        var imgSrc = e.target.getAttribute('src');
        
        // 2. Le pasamos esa misma ruta a la imagen vacía dentro de nuestro Modal
        document.getElementById('lightboxImage').setAttribute('src', imgSrc);
        
        // 3. Activamos la ventana flotante de Bootstrap
        var myModal = new bootstrap.Modal(document.getElementById('lightboxModal'));
        myModal.show();
    }
});