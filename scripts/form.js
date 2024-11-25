// Obtener el formulario y los elementos de entrada
const formulario = document.querySelector("form");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const mensajeInput = document.getElementById("mensaje");

// Manejar el envío del formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

  // Validaciones simples
  if (!nombreInput.value || !emailInput.value || !mensajeInput.value) {
    alert("Por favor, complete todos los campos.");
    return; // Detener la ejecución si falta algún campo
  }

  // Verificar formato del correo electrónico
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }

  // Si todo es válido, mostrar un mensaje de éxito
  alert("¡Gracias por contactarnos! Tu mensaje ha sido enviado.");

//   window.location.href = "../pages/suscribers-list.html";

  // Limpiar los campos después de enviar el formulario
  formulario.reset();
});
