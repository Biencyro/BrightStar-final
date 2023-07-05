import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5FslZA2oYxLvJF4ienJfDqxriCZdI3R4",
    authDomain: "brightstar-e60f6.firebaseapp.com",
    projectId: "brightstar-e60f6",
    storageBucket: "brightstar-e60f6.appspot.com",
    messagingSenderId: "403257699246",
    appId: "1:403257699246:web:0add3c77b2e3a82486763f",
    measurementId: "G-TRNQMFCNP0"
  };

  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth();

  export { projectAuth};