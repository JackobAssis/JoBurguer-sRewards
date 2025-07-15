// Módulo para validação de formulários

function validatePhone(phone) {
  // Aceita apenas números com pelo menos 8 dígitos
  return /^\d{8,}$/.test(phone.replace(/\D/g, ''));
}

function validateName(name) {
  return typeof name === 'string' && name.trim().length > 1;
}

module.exports = { validatePhone, validateName };
