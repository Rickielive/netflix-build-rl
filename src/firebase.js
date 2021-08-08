import  firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDrvxI8n4NsuyZFdDjwSJmogfY84a1G8M",
    authDomain: "netflix-build-rl.firebaseapp.com",
    projectId: "netflix-build-rl",
    storageBucket: "netflix-build-rl.appspot.com",
    messagingSenderId: "952205189032",
    appId: "1:952205189032:web:79e55b708146fe602b479d",
    measurementId: "G-MTP9PQTXG0"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {auth};
 export default db;