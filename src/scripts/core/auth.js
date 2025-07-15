// Funções de autenticação simplificadas (login/cadastro por telefone)

// Login ou cadastro de usuário por telefone
async function loginOrRegister(phone, name = null) {
  // Busca usuário pelo telefone
  const snapshot = await db.collection('clientes').where('phone', '==', phone).get();
  if (!snapshot.empty) {
    // Usuário existe, retorna dados
    const user = snapshot.docs[0].data();
    user.id = snapshot.docs[0].id;
    return user;
  } else if (name) {
    // Usuário não existe, cadastra novo
    const docRef = await db.collection('clientes').add({ name, phone, points: 0, history: [] });
    return { id: docRef.id, name, phone, points: 0, history: [] };
  } else {
    throw new Error('Usuário não encontrado. Informe o nome para cadastro.');
  }
}

// Logout (apenas limpa dados locais)
function logout() {
  // Implementação simples: pode limpar localStorage/sessionStorage se usado
}

// Verifica se usuário é ADM
async function isAdmin(userId) {
  const doc = await db.collection('clientes').doc(userId).get();
  return doc.exists && doc.data().isAdmin === true;
}

module.exports = { loginOrRegister, logout, isAdmin };
