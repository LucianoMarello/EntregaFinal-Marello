import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { AuthContext } from "../../../context/AuthContext";
import SignIn from "./SignIn";

const SignInContainer = () => {
  const { signInWithGoogle, signIn } = useContext(AuthContext);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      let user = {
        email: data.email,
        password: data.password,
      };

      signIn(user);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Debe ingresar un Email válido"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .min(6, "Usar mas de 6 caracteres"),
    }),
    validateOnChange: false,
  });
  return (
    <SignIn
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
      signInWithGoogle={signInWithGoogle}
    />
  );
};

export default SignInContainer;
