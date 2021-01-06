import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyChqO5SeJCDYPfKjBWWMsWc067X2YqFjZM",
  authDomain: "sff-pc-lab.firebaseapp.com",
  projectId: "sff-pc-lab",
  storageBucket: "sff-pc-lab.appspot.com",
  messagingSenderId: "268817226442",
  appId: "1:268817226442:web:78bd1b5470b424b359b233",
  measurementId: "G-LC1WYMYCRZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
