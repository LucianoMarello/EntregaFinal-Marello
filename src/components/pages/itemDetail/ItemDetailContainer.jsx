import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productMock";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);

  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productoSeleccionado = products.find((element) => element.id === +id);
    const prom = new Promise((resolve) => {
      resolve(productoSeleccionado);
    });
    prom.then((res) => setProducto(res));
  }, [id]);

  const onAdd = (quantity) => {
    let productCart = { ...producto, quantity: quantity };
    addToCart(productCart);
    //Hacer una alerta o toastify
  };

  return (
    <ItemDetail producto={producto} onAdd={onAdd} initial={totalQuantity} />
  );
};

export default ItemDetailContainer;
