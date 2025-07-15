// Lógica para index.html

// Elementos
const clientLoginBtn = document.getElementById('clientLoginBtn');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

// Abrir modal de login
if (clientLoginBtn) {
  clientLoginBtn.addEventListener('click', () => {
    loginModal.dataset.type = 'client';
    openModal('loginModal');
  });
}
if (adminLoginBtn) {
  adminLoginBtn.addEventListener('click', () => {
    loginModal.dataset.type = 'admin';
    openModal('loginModal');
  });
}

// Fechar modal
const closeModalBtn = document.getElementById('closeLoginModal');
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => closeModal('loginModal'));
}

// Submissão do formulário de login/cadastro
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const phone = loginForm.phone.value;
    const name = loginForm.name ? loginForm.name.value : null;
    const isAdmin = loginModal.dataset.type === 'admin';

    if (!phone || phone.length < 8) {
      alert('Informe um telefone válido.');
      return;
    }

    try {
      // Login ou cadastro
      const user = await loginOrRegister(phone, name);
      // Verifica se é ADM
      if (isAdmin) {
        const adm = await isAdmin(user.id);
        if (adm) {
          window.location.href = './admin.html';
        } else {
          alert('Usuário não possui permissão de ADM.');
        }
      } else {
        window.location.href = './client.html';
      }
    } catch (err) {
      alert('Erro: ' + err.message);
    }
  });
}

// Link para WhatsApp
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    window.open('https://wa.me/SEUNUMEROAQUI', '_blank');
  });
}

// ...outros scripts para index.html
