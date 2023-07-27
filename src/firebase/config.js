import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCwbLXTM6fVK3xJEIj3pGWgS6vV_Q1mWxQ",
  authDomain: "brightstar-final.firebaseapp.com",
  projectId: "brightstar-final",
  storageBucket: "brightstar-final.appspot.com",
  messagingSenderId: "677439499157",
  appId: "1:677439499157:web:4077c7a1a8b544fa76e49c",
  measurementId: "G-HY2258QCR9"
};

  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth();

  export { projectAuth};

  /*
  import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCwbLXTM6fVK3xJEIj3pGWgS6vV_Q1mWxQ",
  authDomain: "brightstar-final.firebaseapp.com",
  projectId: "brightstar-final",
  storageBucket: "brightstar-final.appspot.com",
  messagingSenderId: "677439499157",
  appId: "1:677439499157:web:4077c7a1a8b544fa76e49c",
  measurementId: "G-HY2258QCR9"
};

  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth();

  export { projectAuth};

  export const projectFirestore = firebase.firestore();
  */