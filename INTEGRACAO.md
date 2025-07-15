# Passo a Passo para Integração e Disponibilização do JoBurguer's Rewards

## 1. Clone o projeto
```sh
git clone https://github.com/JackobAssis/JoBurguer-sRewards.git
cd JoBurguer-sRewards
```

## 2. Instale as dependências
```sh
npm install
```

## 3. Configure o Firebase
- Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
- Ative o Firestore
- Copie as credenciais para `src/scripts/core/firebase-config.js`

## 4. Execute localmente
```sh
npm run start
# Acesse http://localhost:5173
```

## 5. Teste o sistema
```sh
npm test
```

## 6. Personalize imagens, ícones e textos conforme sua hamburgueria

## 7. Faça o build para produção
```sh
npm run build
# Os arquivos finais estarão em dist/
```

## 8. Hospede os arquivos do dist/
- Vercel, Netlify, Firebase Hosting, GitHub Pages, etc.

## 9. Divulgue o link para seus clientes!

---

**Dúvidas ou sugestões?**
Abra uma issue ou entre em contato!
