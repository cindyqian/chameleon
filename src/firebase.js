import firebase from 'firebase/app'
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWKrJQWEHp_IFFbSgmikFHImHnzp2NFPw",
    authDomain: "chameleon-21988.firebaseapp.com",
    projectId: "chameleon-21988",
    storageBucket: "chameleon-21988.appspot.com",
    messagingSenderId: "727134514805",
    appId: "1:727134514805:web:ce906d9999ec9af48a923c",
    measurementId: "G-31X9BKLY1D"
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

//u export db and then use this db object in other files should i keep going then
// what have u guys done so far? 

//https://firebase.google.com/docs/auth/web/manage-users

//export const db = app.firestore(); 

export default app;
