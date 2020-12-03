import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCHoizMY0-szI5DWqeo6zAsJhS_046rq7k",
  authDomain: "crwn-db-30ea6.firebaseapp.com",
  projectId: "crwn-db-30ea6",
  storageBucket: "crwn-db-30ea6.appspot.com",
  messagingSenderId: "317767843295",
  appId: "1:317767843295:web:0fef5df7ad871936c1186a",
  measurementId: "G-DR32MZKLJ3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;