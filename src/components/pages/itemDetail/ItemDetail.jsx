import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productMock";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});
  const [error, setError] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((resolve, reject) => {
      resolve(productoSeleccionado);
    });
    tarea
      .then((respuesta) => setProducto(respuesta))
      .catch((error) => setError(error));
  }, [id]);

  return (
    <div>
      <h1>Detalle Producto</h1>
      <h2>{producto.name}</h2>
      <h4>{producto.price}</h4>
    </div>
  );
};

export default ItemDetail;
