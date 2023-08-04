import { useFormik } from "formik";
import * as Yup from "yup";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .max(15, "No usar mas de 15 caracteres"),
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
  console.log({ errors });

  return (
    <Checkout
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default CheckoutContainer;
