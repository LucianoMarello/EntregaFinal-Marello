import { createContext, useState } from "react";
import { signUp } from "../firebaseConfig";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const createAccount = (user) => {
    let res = signUp(user.email, user.password);
    console.log(res);
  };

  let data = {
    currentUser,
    createAccount,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
