const formulario = document.getElementById('form-registro');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const contrasenaInput = document.getElementById('contrasena');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío automático del formulario

  const nombreValido = validarNombre(nombreInput.value);
  const correoValido = validarCorreo(correoInput.value);
  const contrasenaValida = validarContrasena(contrasenaInput.value);

  if (nombreValido && correoValido && contrasenaValida) {
    // Todos los campos son válidos, enviar a dashboard.html
    // (Reemplaza con tu lógica de envío al dashboard)
    console.log('Formulario válido, redirigir a dashboard.html');
    window.location.href = 'dashboard.html';
  } else {
    // Al menos un campo no es válido, mostrar mensajes de error
    const mensajesError = [];

    if (!nombreValido) {
      mensajesError.push('El nombre solo puede contener letras.');
    }

    if (!correoValido) {
      mensajesError.push('El correo electrónico no tiene un formato válido.');
    }

    if (!contrasenaValida) {
      mensajesError.push('La contraseña debe tener al menos 8 caracteres.');
    }

    mostrarErrores(mensajesError);
  }
});

function validarNombre(nombre) {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(nombre);
}

function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

function validarContrasena(contrasena) {
  return contrasena.length >= 8;
}

function mostrarErrores(mensajesError) {
  const errores = document.getElementById('errores'); // Suponiendo que existe un elemento con ID 'errores'
  errores.innerHTML = ''; // Limpiar errores anteriores

  mensajesError.forEach((mensaje) => {
    const error = document.createElement('p');
    error.classList.add('error'); // Clase para estilizar el mensaje de error
    error.textContent = mensaje;
    errores.appendChild(error);
  });
}
