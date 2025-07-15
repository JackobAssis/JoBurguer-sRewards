// Lógica para client.html

// Verifica autenticação por telefone salvo (exemplo: localStorage)
function checkAuth() {
  const userId = localStorage.getItem('userId');
  if (!userId) window.location.href = './index.html';
  return userId;
}

// Carrega dados do cliente
async function loadClientData() {
  const userId = checkAuth();
  const doc = await db.collection('clientes').doc(userId).get();
  if (doc.exists) {
    const data = doc.data();
    updatePointsUI(data.points, data.nextReward);
    renderHistory(data.history);
    document.getElementById('clientName').textContent = data.name;
  }
}

// Atualiza interface de pontos e progresso
function updatePointsUI(points, nextReward) {
  // Atualizar barra de progresso, pontos atuais, prêmios disponíveis
}

// Renderiza histórico de transações
function renderHistory(history) {
  // Preencher tabela de histórico
}

// Lógica de resgate de prêmios
async function redeemPrize(prizeId) {
  // Abrir modal de confirmação
  // Deduzir pontos, adicionar ao histórico, gerar código de resgate
  // Abrir modal de sucesso
}

// Botão de logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('userId');
    window.location.href = './index.html';
  });
}

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
  loadClientData();
});
