import { createContext, useState } from "react";
import { signUp, loginWithGoogle, logIn, auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const createAccount = async (user) => {
    try {
      let result = await signUp(user.email, user.password);
      console.log(result);
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
      if (error.code === "auth/wrong-password") {
        alert("Contraseña incorrecta");
      } else if (error.code === "auth/invalid-email") {
        alert("Email invalido");
      } else if (error.code === "auth/user-not-found") {
        alert("El usuario no existe");
      } else if (error.code) {
        alert("Algo no funcionó");
      }
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

  const logOut = async () => {
    await signOut(auth);
    setIsLogged(false);
  };

  const logged = async () => {
    onAuthStateChanged(auth, async (user) => {
      console.log(user);
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
