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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;