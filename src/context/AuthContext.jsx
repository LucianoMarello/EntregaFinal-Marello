import { createContext } from "react";
import { signUp, loginWithGoogle, logIn, db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const createAccount = async (user) => {
    try {
      //Agregar Descripcion de errores posibles
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
      console.error("Error al obtener los datos: ", error);
    }
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

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
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
