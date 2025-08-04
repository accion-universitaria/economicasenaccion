document.addEventListener("DOMContentLoaded", () => {
    const imagenes = [
      "../IMAGENES/propuestas/1 presentacion.jpg",
      "../IMAGENES/propuestas/2 principios.jpg",
      "../IMAGENES/propuestas/3 academia estudiantil.jpg",
      "../IMAGENES/propuestas/4 bienestar.jpg",
      "../IMAGENES/propuestas/5 deportes.jpg",
      "../IMAGENES/propuestas/6 finanzas y prensa.jpg",
      "../IMAGENES/propuestas/7 inovacion tecnologica.jpg",
      "../IMAGENES/propuestas/8 extension.jpg",
      "../IMAGENES/propuestas/final1.jpg",
      "../IMAGENES/propuestas/final 2.jpg",
      "../IMAGENES/propuestas/final 3.jpg",


        ];// subo las imagenes desde js y no desde html para que no se vean en la vista de fuente
  
  const carrusel = document.getElementById("carrusel");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  // Crear dinámicamente las slides
  imagenes.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) slide.classList.add("activo");

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Imagen ${index + 1}`;

    slide.appendChild(img);
    carrusel.appendChild(slide);
  });

  const slides = document.querySelectorAll(".slide");
  let current = 0;

  // Función para mostrar el slide activo
  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("activo", i === index);
    });

    // Ocultar o mostrar las flechas según la posición actual
    if (current === 0) {
      prevBtn.style.display = "none"; // Ocultar flecha izquierda en el primer slide
    } else {
      prevBtn.style.display = "block"; // Mostrar flecha izquierda
    }

    if (current === slides.length - 1) {
      nextBtn.style.display = "none"; // Ocultar flecha derecha en el último slide
    } else {
      nextBtn.style.display = "block"; // Mostrar flecha derecha
    }
  }

  // Inicializar la visibilidad de las flechas
  mostrarSlide(current);

  // Eventos de las flechas
  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    mostrarSlide(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    mostrarSlide(current);
  });
});
