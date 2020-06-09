import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDgXIMKw3JQnt0-ONrp-CnaDJJR5__angA",
    authDomain: "crwn-db-620.firebaseapp.com",
  databaseURL: "https://crwn-db-620.firebaseio.com",
  projectId: "crwn-db-620",
  storageBucket: "crwn-db-620.appspot.com",
  messagingSenderId: "828855181791",
  appId: "1:828855181791:web:58ab9e25bd393649d4246a",
  measurementId: "G-1KLRYDXPVR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;