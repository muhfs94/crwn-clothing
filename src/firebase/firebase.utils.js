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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;