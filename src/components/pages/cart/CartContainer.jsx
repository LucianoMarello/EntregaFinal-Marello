import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Cart } from "./Cart";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);

  /*   const emptyCart = ()=>{

  } */

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <Cart cart={cart} clearCart={clearCart} deleteById={deleteById} />
      )}
    </>
  );
};

export default CartContainer;
