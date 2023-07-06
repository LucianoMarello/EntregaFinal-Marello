import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const prom = new Promise((resolve, reject) => {
      resolve(categoryName === undefined ? products : productosFiltrados);
      reject({ message: "No autorizado", status: 401 });
    });

    prom
      .then((respuesta) => setItems(respuesta))
      .catch((err) => {
        setError(err);
        alert(error);
      });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
