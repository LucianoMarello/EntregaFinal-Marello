import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //Arreglo carrito
  const [cart, setCart] = useState([]);

  //Función para agregar items al carrito
  const addToCart = (item) => {
    const exist = isInCart(item.id);
    if (exist) {
      let newArray = cart.map((element) => {
        if (element.id === item.id) {
          return { ...element, quantity: item.quantity };
        } else {
          return element;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  //Función auxiliar para detectar si un id de un elemento está en el carrito
  const isInCart = (id) => {
    let exist = cart.some((element) => element.id === id);
    return exist;
  };

  //Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  //Función para eliminar un elemento del carrito
  const deleteById = (id) => {
    let newArray = cart.filter((element) => element.id !== +id);
    setCart(newArray);
  };

  //Función para calcular el total a pagar en el carrito
  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.price * element.quantity;
    }, 0);
    return total;
  };

  //Función que devuelve la cantidad de un elemento en el carrito
  const getQuantityById = (id) => {
    console.log(cart);
    const product = cart.find((element) => element.id === +id);
    return product ? product.quantity : 1;
  };

  //Función que devuelve la cantidad total de productos en el carrito
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalPrice,
    getQuantityById,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
