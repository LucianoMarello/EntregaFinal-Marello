import { createContext, useState } from "react";
import {
  signUp,
  loginWithGoogle,
  logIn,
  db,
  logout,
  auth,
} from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const createAccount = async (user) => {
    try {
      let result = await signUp(user.email, user.password);
      //Creacion de la cuenta de usuario en Firebase
      console.log(result);
      const usersCollection = collection(db, "users");
      addDoc(usersCollection, user).then((res) => {
        console.log(res);
        // localStorage.setItem("name", );
        // localStorage.setItem("email", );
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Este email ya existe");
      } else if (error.code === "auth/invalid-email") {
        alert("Email invalido");
      } else if (error.code) {
        alert("Algo no funcionó");
      }
    }
  };

  const signIn = async (user) => {
    try {
      let res = await logIn(user.email, user.password);
      console.log(res);
    } catch (error) {
      console.log();
    }
  };

  const signInWithGoogle = async () => {
    //Agregar Descripcion de errores posibles
    let res = await loginWithGoogle();
    const name = res.user.displayName;
    const email = res.user.email;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  const logOut = () => {
    logout();
    setIsLogged(false);
    console.log("Se cerró la sesión");
  };

  const logged = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLogged(true);
      }
    });
  };

  let data = {
    createAccount,
    signInWithGoogle,
    logOut,
    signIn,
    logged,
    isLogged,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
