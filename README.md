# JoBurguer's Rewards

Sistema de recompensas para hamburgueria artesanal, desenvolvido como Progressive Web App (PWA) simples, prático e gratuito. Clientes acumulam pontos a cada compra e podem resgatá-los por prêmios. ADMs gerenciam clientes, pontos, cardápio e regras de fidelidade.

## Funcionalidades
- Cadastro e login simplificado (telefone + nome, sem senha)
- Visualização de pontos e histórico de transações para clientes
- Gerenciamento de clientes, pontos, cardápio e regras de fidelidade para ADMs
- Capacidade offline (PWA)
- Interface responsiva e moderna
- Integração com Firebase (Firestore)
- Testes automatizados (Jest)

## Estrutura do Projeto
```
src/
  pages/         # index.html, client.html, admin.html
  styles/        # CSS modular
  scripts/       # JS modular (core, modules, views)
  assets/        # imagens, ícones
  manifest.json  # PWA
package.json     # dependências e scripts
README.md        # documentação
```

## Tecnologias
- HTML5, CSS3, JavaScript (modular)
- Firebase (Firestore)
- Vite (dev server)
- Jest (testes unitários)

## Como funciona
- **Cliente:** acessa o app, faz login/cadastro com telefone e nome, acompanha pontos, histórico e resgata prêmios.
- **ADM:** acessa painel administrativo, gerencia clientes, pontos, cardápio, regras e relatórios.
- **PWA:** pode ser instalado no celular/desktop, funciona offline.

## Testes
- Testes unitários para validação de dados e autenticação.
- Execute `npm test` para rodar os testes.

## Deploy
- Pode ser hospedado em qualquer serviço estático (Vercel, Netlify, Firebase Hosting, GitHub Pages).

## Licença
MIT

---

# Passo a Passo para Integração e Disponibilização

1. **Clone o projeto:**
   ```sh
   git clone https://github.com/JackobAssis/JoBurguer-sRewards.git
   cd JoBurguer-sRewards
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure o Firebase:**
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Ative o Firestore
   - Copie as credenciais para `src/scripts/core/firebase-config.js`

4. **Execute localmente:**
   ```sh
   npm run start
   # Acesse http://localhost:5173
   ```

5. **Teste o sistema:**
   ```sh
   npm test
   ```

6. **Personalize imagens, ícones e textos conforme sua hamburgueria.**

7. **Faça o build para produção:**
   ```sh
   npm run build
   # Os arquivos finais estarão em dist/
   ```

8. **Hospede os arquivos do dist/**
   - Vercel, Netlify, Firebase Hosting, GitHub Pages, etc.

9. **Divulgue o link para seus clientes!**

---

**Dúvidas ou sugestões?**
Abra uma issue ou entre em contato!