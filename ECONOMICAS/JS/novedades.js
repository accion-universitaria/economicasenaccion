document.addEventListener("DOMContentLoaded", function () {
    const articulos = document.querySelectorAll('.articulo');
    const articulosArray = Array.from(articulos);

    function convertirFecha(fechaStr) {
        const partesFecha = fechaStr.split('/');
        return new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);
    }

    articulosArray.sort(function (a, b) {
        const fechaA = a.querySelector('.fecha-articulo h3').textContent.trim();
        const fechaB = b.querySelector('.fecha-articulo h3').textContent.trim();

        const dateA = convertirFecha(fechaA);
        const dateB = convertirFecha(fechaB);

        return dateB - dateA;
    });

    const contenedor = document.querySelector('.contenedor-articulos');
    articulosArray.forEach(function (articulo) {
        contenedor.appendChild(articulo);
    });
});
