import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Cart } from "./Cart";
import EmptyCart from "./EmptyCart";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);

  const emptyCart = () => {
    Swal.fire({
      title: "¿Quieres vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "¡Se vació el carrito!",
          icon: "success",
          showConfirmButton: false,
          timer: 1200,
        });
      }
    });
  };

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <Cart cart={cart} emptyCart={emptyCart} deleteById={deleteById} />
      )}
    </>
  );
};

export default CartContainer;
