/* ==================== INICIALIZACIÓN DE SWIPER (ANUNCIOS) ==================== */

var swiper = new Swiper(".sliderAnuncios", {
    slidesPerView: 1, /* En celulares mostrará 1 sola imagen */
    spaceBetween: 0, /* Espacio entre imágenes */
    loop: true, /* Hace que el slider sea infinito */
    autoplay: {
        delay: 10000, /* 10 segundos */
        disableOnInteraction: false, /* Sigue en automático aunque el usuario interactúe */
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        /* En tablets (pantallas >= 768px) mostrará 2 imágenes */
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        /* En PC (pantallas >= 1024px) mostrará 3 imágenes y avanzará de 1 en 1 */
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 1 /* Avanza 1 a la vez */
        },
    },
});