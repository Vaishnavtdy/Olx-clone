import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCq4wmVedhBT2-BesyCFRGdFMyOn0PhV_s",
    authDomain: "olx-clone-c5990.firebaseapp.com",
    projectId: "olx-clone-c5990",
    storageBucket: "olx-clone-c5990.appspot.com",
    messagingSenderId: "293676172950",
    appId: "1:293676172950:web:70385466176e27759e24b7",
    measurementId: "G-0B98KGNH7X"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const storage = getStorage(firebaseApp);

export {db,auth, storage}