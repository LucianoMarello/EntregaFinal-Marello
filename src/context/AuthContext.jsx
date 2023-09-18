import { createContext } from "react";
import { signUp, loginWithGoogle, logIn } from "../firebaseConfig";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const createAccount = async (user) => {
    //Agregar Descripcion de errores posibles
    let res = await signUp(user.email, user.password);
    console.log(res);
  };

  const signIn = async (user) => {
    //Agregar Descripcion de errores posibles
    let res = await logIn(user.email, user.password);
    console.log(res);
  };

  const signInWithGoogle = async () => {
    //Agregar Descripcion de errores posibles
    let res = await loginWithGoogle();
    const name = res.user.displayName;
    const email = res.user.email;
    const profilePic = res.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
  };

  const logOut = () => {
    localStorage.clear();
  };

  let data = {
    createAccount,
    signInWithGoogle,
    logOut,
    signIn,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
