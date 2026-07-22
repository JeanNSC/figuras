document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById('main-product-img');
    const thumbnails = document.querySelectorAll('.thumbnail-img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            
            // Si el usuario hace clic en la imagen que YA está puesta, no hacemos nada
            if (mainImage.src === this.src) return;

            // 1. Ocultamos suavemente la imagen actual bajando su opacidad a 0
            mainImage.style.opacity = '0';

            // 2. Esperamos 300 milisegundos (lo que dura la transición CSS) para cambiar la foto
            setTimeout(() => {
                // Cambiamos la ruta de la imagen
                mainImage.src = this.src;

                // 3. SOLO cuando la nueva imagen haya cargado por completo, la mostramos
                mainImage.onload = function() {
                    mainImage.style.opacity = '1';
                };
            }, 300); 

            // Actualizamos el borde negro de las miniaturas
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});