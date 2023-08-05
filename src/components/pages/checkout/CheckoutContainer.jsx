import { useFormik } from "formik";
import * as Yup from "yup";
import Checkout from "./Checkout";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CheckoutContainer = () => {
  const { cart } = useContext(CartContext);
  // HACER MENSAJE DE DETALLE DE COMPRA
  const detail = `Detalle de compra: ${cart.map(
    (element) => ` - ${element.quantity} unidad/es de ${element.name}`
  )}`;

  const confirmPurchase = () => {
    Swal.fire({
      title: "¿Confirmar compra?",
      text: detail, // HACER MENSAJE DE DETALLE DE COMPRA
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, confirmar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Su compra ha sido confirmada",
          text: "¡Muchas gracias por confiar en nosotros!",
        });
      }
    });
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      // HACER MENSAJE DE DETALLE DE COMPRA
      console.log(data);
      confirmPurchase();
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

  return (
    <Checkout
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default CheckoutContainer;
