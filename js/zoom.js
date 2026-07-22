// ==========================================================
// ARCHIVO: zoom.js
// Lógica para abrir la imagen del producto en pantalla completa
// ==========================================================

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Buscamos los 3 elementos que interactúan
    const mainImage = document.getElementById('main-product-img');
    const imgModalGrande = document.getElementById('img-modal-grande');
    const btnZoom = document.getElementById('btn-zoom');

    // 2. Seguridad: Si no existe la imagen en esta página, detenemos el script
    if (!mainImage || !imgModalGrande) return;

    // 3. Función que copia la imagen de la galería al modal gigante
    function actualizarImagenModal() {
        imgModalGrande.src = mainImage.src;
    }

    // 4. Activamos la función al hacer clic en la foto
    mainImage.addEventListener('click', actualizarImagenModal);
    
    // 5. Activamos la función al hacer clic en el botón de la lupa (si existe)
    if (btnZoom) {
        btnZoom.addEventListener('click', actualizarImagenModal);
    }

});