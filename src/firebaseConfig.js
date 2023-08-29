import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
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
const auth = getAuth(app)

//Agregar en el onsubmit del formulario de login y registro
export const logIn = async ({ email, password }) => {
    let res = await signInWithEmailAndPassword(auth, email, password)
    return res
}

export const signUp = async ({ email, password }) => {
    let res = await createUserWithEmailAndPassword(auth, email, password)
    return res
}

let googleProvider = new GoogleAuthProvider()

//ponerla dentro de otra funcion para poder guardar el resultado de la funcion (res)
export const loginWithGoogle = async () => {
    let res = await signInWithPopup(auth, googleProvider)
    return res
}