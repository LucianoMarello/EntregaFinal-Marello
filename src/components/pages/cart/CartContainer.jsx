import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Cart } from "./Cart";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <h2>No hay productos en el carrito</h2>
      ) : (
        <Cart cart={cart} />
      )}
    </>
  );
};

export default CartContainer;
