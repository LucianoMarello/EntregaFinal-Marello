import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {};

  const clearCart = () => {};

  let data = { cart, addToCart, clearCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
