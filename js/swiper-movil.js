document.addEventListener('DOMContentLoaded', function() {
    
    var swiperFabricantes = new Swiper(".swiperFabricantes", {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // BORRAMOS EL BLOQUE DE "navigation" QUE ESTABA AQUÍ
        
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
                autoplay: false,
                allowTouchMove: false
            }
        }
    });

    // Slider para la sección Preventa
    var swiperPreventa = new Swiper(".swiperPreventa", {
        slidesPerView: 1, // En celular muestra 1 tarjeta a la vez
        spaceBetween: 20,
        autoplay: {
            delay: 4000, // Le ponemos 4 segundos para variar un poco el ritmo
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiperPreventa .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // En tablets muestra 2
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 4, // En PC muestra las 4
                spaceBetween: 30,
                autoplay: false, // En PC se queda quieto como cuadrícula
                allowTouchMove: false
            }
        }
    });

    // Slider para la sección Descuentos
    var swiperDescuentos = new Swiper(".swiperDescuentos", {
        slidesPerView: 1, 
        spaceBetween: 20,
        autoplay: {
            delay: 4500, // 4.5 segundos para variar el ritmo
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiperDescuentos .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2, 
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 4, 
                spaceBetween: 30,
                autoplay: false, 
                allowTouchMove: false 
            }
        }
    });

});