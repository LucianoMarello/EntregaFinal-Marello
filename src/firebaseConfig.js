import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

//Iniciar Sesión
export const logIn = async (email, password) => {
    let res = await signInWithEmailAndPassword(auth, email, password)
    return res
}

//Crear Cuenta
export const signUp = async (email, password) => {
    let res = await createUserWithEmailAndPassword(auth, email, password)
    return res
}

//Iniciar Sesión con Google
let googleProvider = new GoogleAuthProvider()
export const loginWithGoogle = async () => {
    let res = await signInWithPopup(auth, googleProvider)
    return res
}