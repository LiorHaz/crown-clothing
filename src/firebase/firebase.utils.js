import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9vTnjTyPNWvZ9330dZlUiFfU5RjnOYCM",
    authDomain: "crown-db-2edb9.firebaseapp.com",
    databaseURL: "https://crown-db-2edb9.firebaseio.com",
    projectId: "crown-db-2edb9",
    storageBucket: "crown-db-2edb9.appspot.com",
    messagingSenderId: "768623319720",
    appId: "1:768623319720:web:70985e3f46d89eeef0c09d",
    measurementId: "G-4SQGDJQ38L"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;