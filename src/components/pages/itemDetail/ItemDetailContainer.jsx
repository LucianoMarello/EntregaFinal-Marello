import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productMock";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);

  const totalQuantity = getQuantityById(id);

  const notify = (item) => {
    toast.info(`Se agregaron ${item.quantity} unidad/es de ${item.name}`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

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
    notify(productCart);
  };

  return (
    <div>
      <ItemDetail producto={producto} onAdd={onAdd} initial={totalQuantity} />
      <ToastContainer />
    </div>
  );
};

export default ItemDetailContainer;
