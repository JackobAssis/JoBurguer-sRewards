// --- Autenticação e Verificação de Permissão ---
async function isAdmin(userId) {
  // Exemplo simulado (substitua com a lógica real Firestore)
  // Retorna true se for admin, false caso contrário
  const admins = ['admin1', 'admin2']; // Exemplo IDs de admins
  return admins.includes(userId);
}

async function checkAdminAuth() {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    window.location.href = './index.html';
    return;
  }
  const adm = await isAdmin(userId);
  if (!adm) {
    window.location.href = './client.html';
  } else {
    // Mostra o nome do admin, se desejar
    document.getElementById('adminName').textContent = `Olá, Admin (${userId})`;
  }
}

// --- Navegação entre abas ---
const tabs = document.querySelectorAll('.admin-tab');
const sections = document.querySelectorAll('.admin-section');

function switchTab(tabName) {
  sections.forEach(section => {
    section.style.display = (section.id === tabName) ? 'block' : 'none';
  });
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });
}

// Configura os eventos para os botões das abas
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    switchTab(tab.dataset.tab);
  });
});

// --- Dados do cardápio (simulação inicial) ---
let menuItems = [
  {
    nome: "Cheeseburguer",
    pontos: 10,
    imagem: "../assets/images/burguer1.png"
  },
  {
    nome: "Duplo Bacon",
    pontos: 15,
    imagem: "../assets/images/burguer2.png"
  },
  {
    nome: "Frango Crocante",
    pontos: 12,
    imagem: "../assets/images/burguer3.png"
  }
];

// --- Renderiza os cards do cardápio ---
const menuList = document.getElementById("menuList");
let editIndex = null; // Índice do item sendo editado

function renderMenu() {
  menuList.innerHTML = "";
  const grid = document.createElement("div");
  grid.classList.add("menu-grid");

  menuItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("menu-card", "admin");

    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}" />
      <h3>${item.nome}</h3>
      <p>${item.pontos} pontos</p>
      <div class="admin-actions">
        <button class="edit-btn" data-index="${index}">Editar</button>
        <button class="delete-btn" data-index="${index}">Deletar</button>
      </div>
    `;

    grid.appendChild(card);
  });

  menuList.appendChild(grid);

  // Eventos para editar
  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.target.dataset.index;
      loadItemToForm(idx);
    });
  });

  // Eventos para deletar
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.target.dataset.index;
      if (confirm(`Deseja deletar o item "${menuItems[idx].nome}"?`)) {
        menuItems.splice(idx, 1);
        renderMenu();
      }
    });
  });
}

// --- Carrega dados do item no formulário para edição ---
function loadItemToForm(index) {
  const item = menuItems[index];
  document.getElementById('itemName').value = item.nome;
  document.getElementById('itemPoints').value = item.pontos;
  document.getElementById('itemImage').value = item.imagem;
  editIndex = index;
}

// --- Formulário adicionar/editar item do cardápio ---
const addMenuItemForm = document.getElementById('addMenuItemForm');
addMenuItemForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('itemName').value.trim();
  const pontos = Number(document.getElementById('itemPoints').value);
  const imagem = document.getElementById('itemImage').value.trim();

  if (!nome || isNaN(pontos) || pontos <= 0 || !imagem) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  if (editIndex !== null) {
    // Edita item existente
    menuItems[editIndex] = { nome, pontos, imagem };
    editIndex = null;
  } else {
    // Adiciona novo item
    menuItems.push({ nome, pontos, imagem });
  }

  addMenuItemForm.reset();
  renderMenu();
});

// --- Botão logout ---
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('userId'); // limpa login local
  window.location.href = './index.html';
});

// --- Inicialização ---
window.addEventListener('DOMContentLoaded', async () => {
  await checkAdminAuth();

  // Começa com a aba clientes visível
  switchTab('clientes');

  // Renderiza menu
  renderMenu();

  // Aqui você pode chamar funções para listar clientes, pontos e relatórios
  // listClients();
  // listMenuItems();
  // loadReports();
});