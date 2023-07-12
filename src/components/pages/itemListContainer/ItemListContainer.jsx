import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.category === categoria
    );
    const prom = new Promise((resolve) => {
      resolve(categoria === undefined ? products : productosFiltrados);
    });

    prom.then((respuesta) => setItems(respuesta));
  }, [categoria]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
