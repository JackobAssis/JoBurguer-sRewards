// Testes unitários para login/cadastro simplificado
const { loginOrRegister } = require('../auth');

// Mock Firestore (db)
global.db = {
  collection: jest.fn((colName) => {
    let data = [];
    if (colName === 'clientes') {
      data = [
        { id: '1', data: () => ({ phone: '11999998888', name: 'Teste User', points: 0, history: [] }) }
      ];
    }
    return {
      where: jest.fn((field, op, value) => {
        return {
          get: jest.fn(() => Promise.resolve({
            empty: !data.some(d => d.data().phone === value),
            docs: data.filter(d => d.data().phone === value)
          }))
        };
      }),
      add: jest.fn((newUser) => Promise.resolve({ id: '2', ...newUser })),
      doc: jest.fn((id) => ({ get: jest.fn(() => Promise.resolve({ exists: id === '1', data: () => ({ isAdmin: id === '1' }) })) }))
    };
  })
};

describe('Login/Cadastro por telefone e nome', () => {
  it('deve cadastrar novo usuário se telefone não existir', async () => {
    const phone = '11988887777';
    const name = 'Novo User';
    const user = await loginOrRegister(phone, name);
    expect(user.phone).toBe(phone);
    expect(user.name).toBe(name);
    expect(user.points).toBe(0);
  });

  it('deve logar usuário existente pelo telefone', async () => {
    const phone = '11999998888';
    const user = await loginOrRegister(phone);
    expect(user.phone).toBe(phone);
    expect(user.name).toBeDefined();
  });

  it('deve lançar erro se telefone não existir e nome não for informado', async () => {
    await expect(loginOrRegister('00000000')).rejects.toThrow('Usuário não encontrado. Informe o nome para cadastro.');
  });
});
