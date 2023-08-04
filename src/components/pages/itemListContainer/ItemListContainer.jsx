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
      setTimeout(() => {
        resolve(categoria === undefined ? products : productosFiltrados);
      }, 100);
    });

    prom.then((respuesta) => setItems(respuesta));
  }, [categoria]);

  return (
    <>
      {items.length === 0 ? <h2>Cargando...</h2> : <ItemList items={items} />};
    </>
  );
};

export default ItemListContainer;
