import { useFormik } from "formik";
import * as Yup from "yup";
import Register from "./Register";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const RegisterContainer = () => {
  const { createAccount } = useContext(AuthContext);
  const signUp = (user) => {
    createAccount(user);
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      //Objeto que representa la orden de compra
      let user = {
        email: data.email,
        password: data.password,
        name: data.name,
      };

      //Crear usuario en base de datos
      signUp(user);
      console.log(user);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Debe ingresar un Email válido"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .min(6, "Usar mas de 6 caracteres"),
      repeatPassword: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "La contraseña no coincide"),
    }),
    validateOnChange: false,
  });
  return (
    <Register
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default RegisterContainer;
