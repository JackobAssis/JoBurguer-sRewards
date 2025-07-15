// Configuração do Firebase
// Insira suas credenciais do Firebase abaixo
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Inicialização do Firebase
let firebaseApp = null;
if (typeof firebase !== 'undefined') {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}

// Exporta instâncias para uso nos outros scripts
// export const auth = firebaseApp ? firebaseApp.auth() : null;
// export const db = firebaseApp ? firebaseApp.firestore() : null;
