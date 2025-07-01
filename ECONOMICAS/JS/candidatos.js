
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('activo');
    });

    // Opcional: cerrar el menú al hacer clic fuera
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
        menu.classList.remove('activo');
      }
    });
  });

