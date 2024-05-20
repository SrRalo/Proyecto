const body = document.body;
const colorThemeSelect = document.getElementById('color-tema');
const nightModeCheckbox = document.getElementById('modo-nocturno');
const messageContainer = document.getElementById('mensaje-configuracion');

// Function to invert colors based on a flag
function invertColors(invert) {
  body.style.filter = invert ? 'invert(100%)' : 'none';
  messageContainer.textContent = invert ? 'Modo oscuro activado' : 'Modo oscuro desactivado';
}

// Event listener for checkbox change (if using checkbox)
nightModeCheckbox.addEventListener('change', function() {
  invertColors(this.checked);
});

// Event listener for select change (if using dropdown)
colorThemeSelect.addEventListener('change', function() {
  invertColors(this.value === 'oscuro');
});

// Initial check based on checkbox state (if using checkbox)
invertColors(nightModeCheckbox.checked);

// Initial check based on select value (if using dropdown)
invertColors(colorThemeSelect.value === 'oscuro');
