import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGf2uP8zxbeH4-H3oVIq4xULSvWLzf5iA",
    authDomain: "linkedin-clone-7b8bb.firebaseapp.com",
    projectId: "linkedin-clone-7b8bb",
    storageBucket: "linkedin-clone-7b8bb.appspot.com",
    messagingSenderId: "983008650281",
    appId: "1:983008650281:web:e5b2a68fc56322dbc26838"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export {auth,provider,storage};
  export default db;
