import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const SignInWithGoogle = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  return (
    <div>
      <button
        type="button"
        className="login-with-google-btn"
        onClick={signInWithGoogle}
      >
        Iniciar Sesión con Google
      </button>
    </div>
  );
};

export default SignInWithGoogle;
