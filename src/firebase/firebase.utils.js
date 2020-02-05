import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCGyMvOxsyczAMSe_DAc928PmtUHnNGfbA",
  authDomain: "crwn-db-1bdb4.firebaseapp.com",
  databaseURL: "https://crwn-db-1bdb4.firebaseio.com",
  projectId: "crwn-db-1bdb4",
  storageBucket: "crwn-db-1bdb4.appspot.com",
  messagingSenderId: "405468339944",
  appId: "1:405468339944:web:095a7aa3a00dbc9c6d335d",
  measurementId: "G-VB4RXKV9SR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;