import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../../context/CartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Este es el carrito</h2>
    </div>
  );
};
