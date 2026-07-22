// Usamos 'load' para asegurarnos de que toda la página (imágenes, webp, css) esté lista
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        // Tiempo en milisegundos que el preloader estará visible de forma forzada
        // 1500 = 1.5 segundos. Ajusta este valor si lo quieres más rápido o más lento.
        const tiempoVisible = 3500; 

        setTimeout(function() {
            // 1. Oculta la pantalla de carga (inicia la transición CSS)
            preloader.classList.add('preloader-hidden');
            
            // 2. Libera el scroll del usuario para que pueda navegar
            document.body.classList.remove('no-scroll');
            
            // 3. Esperamos a que termine el desvanecimiento (500ms) y refrescamos AOS
            // Esto evita que las tarjetas de productos se queden invisibles por un error de cálculo visual
            setTimeout(function() {
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            }, 500);

        }, tiempoVisible);
    }
});