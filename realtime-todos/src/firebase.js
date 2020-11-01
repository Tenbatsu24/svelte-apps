import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDQUOF8FWbKSR4g6tNuNWvkTIKG8J9yNA0",
    authDomain: "svelte-example-8d38c.firebaseapp.com",
    databaseURL: "https://svelte-example-8d38c.firebaseio.com",
    projectId: "svelte-example-8d38c",
    storageBucket: "svelte-example-8d38c.appspot.com",
    messagingSenderId: "1017177723692",
    appId: "1:1017177723692:web:73983400603be48529d289",
    measurementId: "G-EEFM65FC31"

};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
