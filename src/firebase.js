import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB6F8Cmv9wgLsMHhgr-7AWN7y1C8PKpytM",
    authDomain: "whatsapp-7442b.firebaseapp.com",
    projectId: "whatsapp-7442b",
    storageBucket: "whatsapp-7442b.appspot.com",
    messagingSenderId: "821088909377",
    appId: "1:821088909377:web:d722be7b4e4f63b2306ec0",
    measurementId: "G-WK29HS4ML1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;