const { validatePhone, validateName } = require('../formValidator');

describe('Validação de Telefone', () => {
  it('deve aceitar telefones válidos', () => {
    expect(validatePhone('11999998888')).toBe(true);
    expect(validatePhone('(11) 99999-8888')).toBe(true);
  });
  it('deve rejeitar telefones inválidos', () => {
    expect(validatePhone('12345')).toBe(false);
    expect(validatePhone('abcde')).toBe(false);
    expect(validatePhone('')).toBe(false);
  });
});

describe('Validação de Nome', () => {
  it('deve aceitar nomes válidos', () => {
    expect(validateName('João')).toBe(true);
    expect(validateName('Maria Silva')).toBe(true);
  });
  it('deve rejeitar nomes inválidos', () => {
    expect(validateName('')).toBe(false);
    expect(validateName(' ')).toBe(false);
    expect(validateName('A')).toBe(false);
  });
});