import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCuEoRWGy9xVHYjyf3MALQAFhiPsc5RtVo",
    authDomain: "ecommerce-marello.firebaseapp.com",
    projectId: "ecommerce-marello",
    storageBucket: "ecommerce-marello.appspot.com",
    messagingSenderId: "806865211961",
    appId: "1:806865211961:web:c30684c673635f5a3273e8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)