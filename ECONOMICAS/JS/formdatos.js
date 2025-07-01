const URL_API = 'https://68633ffc88359a373e944034.mockapi.io/Economicas';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formContacto');
  form.addEventListener('submit', enviarFormulario);
});

async function enviarFormulario(e) {
  e.preventDefault();

  const datos = {
    nombre: document.getElementById('nombre').value.trim(),
    apellido: document.getElementById('apellido').value.trim(),
    numerodetelefono: document.getElementById('numerodetelefono').value.trim(),
    fechadenacimiento: document.getElementById('fechadenacimiento').value.trim(),
    correoelectronico: document.getElementById('correoelectronico').value.trim(),
    carrera: document.getElementById('carrera').value.trim(),
    mensaje: document.getElementById('mensaje').value.trim()
  };

  // Validar que todos los campos estén completos
  if (Object.values(datos).some(v => v === '')) {
    alert('Por favor, completá todos los campos.');
    return;
  }

  try {
    const respuesta = await fetch(URL_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });

    if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`);

   
    e.target.reset();
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
  }
}
