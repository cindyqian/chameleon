import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

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
export const db = app.firestore(); 
export default app;


export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    try {
      console.log(additionalData)
      await userRef.set({
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await db.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};