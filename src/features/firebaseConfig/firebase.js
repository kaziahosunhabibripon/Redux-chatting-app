import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDi__-9o2nR0H2heFy0QOOyRCdMKzTEBNg",
    authDomain: "mychartingapp.firebaseapp.com",
    projectId: "mychartingapp",
    storageBucket: "mychartingapp.appspot.com",
    messagingSenderId: "738456613488",
    appId: "1:738456613488:web:202c5fff4cdeb929483ab5",
    measurementId: "G-34M7HDDE7K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider};
  export default db;