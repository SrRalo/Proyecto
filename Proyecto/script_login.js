const formularioLogin = document.getElementById('form-login');
const correoLogin = document.getElementById('correo');
const contrasenaLogin = document.getElementById('contrasena');

formularioLogin.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío automático del formulario

  const correoValido = validarCorreo(correoLogin.value);
  const contrasenaValida = validarContrasena(contrasenaLogin.value);

  if (correoValido && contrasenaValida) {
    // Ambos campos son válidos, enviar datos de inicio de sesión
    console.log('Formulario válido, enviar datos de inicio de sesión');
    window.location.href = 'dashboard.html';

  } else {
    // Al menos un campo no es válido, mostrar mensajes de error
    const mensajesError = [];

    if (!correoValido) {
      mensajesError.push('El correo electrónico no tiene un formato válido.');
    }

    if (!contrasenaValida) {
      mensajesError.push('La contraseña debe tener al menos 8 caracteres.');
    }

    mostrarErrores(mensajesError);
  }
});


function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }
  
  function validarContrasena(contrasena) {
    return contrasena.length >= 8;
  }
  
