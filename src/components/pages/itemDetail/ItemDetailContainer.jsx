import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((resolve) => {
      resolve(productoSeleccionado);
    });
    tarea.then((respuesta) => setProducto(respuesta));
  }, [id]);

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
