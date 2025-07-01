document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los artículos
    const articulos = document.querySelectorAll('.articulo');

    // Convertir NodeList a un arreglo para poder ordenarlo
    const articulosArray = Array.from(articulos);

    // Función para convertir las fechas en formato 'DD/MM/YYYY' a un objeto Date
    function convertirFecha(fechaStr) {
        const partesFecha = fechaStr.split('/');
        return new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]); // Año, mes (0-indexed), día
    }

    // Ordenar los artículos por fecha de forma descendente (de más reciente a más antigua)
    articulosArray.sort(function (a, b) {
        const fechaA = a.querySelector('.eslogan h3').textContent.trim();
        const fechaB = b.querySelector('.eslogan h3').textContent.trim();

        const dateA = convertirFecha(fechaA);
        const dateB = convertirFecha(fechaB);

        return dateB - dateA;  // Orden descendente
    });

    // Reinsertar los artículos ordenados en el contenedor
    const contenedor = document.querySelector('.contenedor-articulos');
    articulosArray.forEach(function (articulo) {
        contenedor.appendChild(articulo); // Mueve cada artículo al nuevo orden
    });
});