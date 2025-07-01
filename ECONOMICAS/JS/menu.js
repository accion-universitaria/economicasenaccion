document.addEventListener("DOMContentLoaded", () => {
    inicializarMenu();
    function inicializarMenu() {
        const toggle = document.getElementById("menu-toggle");
        const menu = document.getElementById("menu");
      
        if (toggle && menu) {
          toggle.addEventListener("click", () => {
            menu.classList.toggle("mostrar");
          });
        }
      }
    });
    document.addEventListener("DOMContentLoaded", () => {
      const toggleSub = document.getElementById("sub-menu-toggle");
      const subMenu = document.getElementById("sub-menu-candidatos");
    
      if (toggleSub && subMenu) {
        toggleSub.addEventListener("click", () => {
          subMenu.classList.toggle("oculto");
        });
      }
    });
    