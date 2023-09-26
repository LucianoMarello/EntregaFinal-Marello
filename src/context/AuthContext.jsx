import { createContext, useState } from "react";
import { signUp, loginWithGoogle, logIn, auth, db } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const createAccount = async (user) => {
    try {
      await signUp(user.email, user.password);
      setUserName(user.name);
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
      await logIn(user.email, user.password);
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
    setUserName(res.user.displayName);
  };

  const logOut = async () => {
    await signOut(auth);
    setIsLogged(false);
    setUserName("");
  };

  const logged = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLogged(true);
        //Busqueda de nombre de usuario correspondiente
        let usersCollection = collection(db, "users");
        let reference = usersCollection;
        getDocs(reference).then((res) => {
          res.docs.map((doc) => {
            if (doc.data().email == user.email) {
              setUserName(doc.data().name);
            }
          });
        });
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
    userName,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
