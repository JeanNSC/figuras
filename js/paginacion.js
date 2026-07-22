document.addEventListener("DOMContentLoaded", function() {
    // 1. Buscamos todos los productos y el espacio donde va el paginador
    const productos = Array.from(document.querySelectorAll('.producto-item'));
    const paginadorContainer = document.querySelector('.custom-pagination');

    // Si no hay productos o paginador en esta página, detenemos el script
    if (!paginadorContainer || productos.length === 0) return;

    let paginaActual = 1;
    let limitePorPagina = window.innerWidth <= 768 ? 8 : 16;

    // 2. Función maestra que muestra los productos de la página seleccionada
    function mostrarPagina(pagina) {
        paginaActual = pagina;
        
        // Matemáticas para saber qué productos mostrar
        const inicio = (pagina - 1) * limitePorPagina;
        const fin = inicio + limitePorPagina;

        // Ocultamos o mostramos los productos
        productos.forEach((producto, index) => {
            if (index >= inicio && index < fin) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });

        actualizarBotonesPaginador();
    }

    // 3. Función que dibuja los botones (1, 2, 3, ->) según los productos que tengas
    function actualizarBotonesPaginador() {
        const totalPaginas = Math.ceil(productos.length / limitePorPagina);
        
        // Limpiamos los botones estáticos del HTML
        paginadorContainer.innerHTML = ''; 

        // Si solo hay 1 página, no mostramos el paginador
        if (totalPaginas <= 1) {
            paginadorContainer.style.display = 'none';
            document.querySelector('.pagination-line').style.display = 'none';
            return;
        } else {
            paginadorContainer.style.display = 'flex';
            document.querySelector('.pagination-line').style.display = 'block';
        }

        // Creamos los números 1, 2, 3...
        for (let i = 1; i <= totalPaginas; i++) {
            const li = document.createElement('li');
            if (i === paginaActual) li.classList.add('active'); // Pinta fucsia la actual
            
            const a = document.createElement('a');
            a.href = "#catalogo-tienda"; // Evita que la página recargue mal
            a.textContent = i;
            
            // Lo que pasa cuando haces clic en un número
            a.addEventListener('click', function(e) {
                e.preventDefault();
                mostrarPagina(i);
                // Subimos suavemente al inicio del catálogo para que el usuario siga viendo
                document.getElementById('catalogo-tienda').scrollIntoView({ behavior: 'smooth' });
            });

            li.appendChild(a);
            paginadorContainer.appendChild(li);
        }

        // Creamos la flecha de "Siguiente ->" si no estamos en la última página
        if (paginaActual < totalPaginas) {
            const liNext = document.createElement('li');
            const aNext = document.createElement('a');
            aNext.href = "#catalogo-tienda";
            aNext.innerHTML = '&rarr;'; // Símbolo de flecha
            aNext.classList.add('next-arrow');
            
            aNext.addEventListener('click', function(e) {
                e.preventDefault();
                mostrarPagina(paginaActual + 1);
                document.getElementById('catalogo-tienda').scrollIntoView({ behavior: 'smooth' });
            });

            liNext.appendChild(aNext);
            paginadorContainer.appendChild(liNext);
        }
    }

    // 4. Si el usuario gira el celular de vertical a horizontal, recalcula solo
    window.addEventListener('resize', () => {
        const nuevoLimite = window.innerWidth <= 768 ? 8 : 16;
        if (nuevoLimite !== limitePorPagina) {
            limitePorPagina = nuevoLimite;
            mostrarPagina(1); // Regresamos a la página 1 para evitar errores
        }
    });

    // 5. ¡Iniciamos la página 1 por defecto al entrar a la tienda!
    mostrarPagina(1);
});