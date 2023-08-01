import { Button, TextField } from "@mui/material";
import "./FormikForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
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
    <div className="containerForm">
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Nombre"
          name="name"
          error={errors.name ? true : false}
          variant="outlined"
          onChange={handleChange}
          helperText={errors.name}
        />
        <TextField
          type="text"
          label="Email"
          name="email"
          error={errors.email ? true : false}
          variant="outlined"
          onChange={handleChange}
          helperText={errors.email}
        />
        <TextField
          type="password"
          label="Contraseña"
          name="password"
          error={errors.password ? true : false}
          variant="outlined"
          onChange={handleChange}
          helperText={errors.password}
        />
        <TextField
          type="password"
          label="Repetir contraseña"
          name="repeatPassword"
          error={errors.repeatPassword ? true : false}
          variant="outlined"
          onChange={handleChange}
          helperText={errors.repeatPassword}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormikForm;
