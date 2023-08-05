import { useFormik } from "formik";
import * as Yup from "yup";
import Checkout from "./Checkout";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();
  let date = serverTimestamp();

  const showOrder = () => {
    Swal.fire({
      title: "¡Compra Confirmada!",
      text: "Gracias por confiar en nosotros",
      icon: "success",
      timer: 3000,
    });
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      //Objeto que representa la orden de compra
      let order = {
        buyer: data.name,
        items: cart,
        total,
        date,
      };

      //Creación de la orden en firebase
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => {
        setOrderId(res.id);
        showOrder();
      });
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
      cart={cart}
      total={total}
      orderId={orderId}
    />
  );
};

export default CheckoutContainer;
