import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.category === category
    );
    const prom = new Promise((resolve) => {
      setTimeout(() => {
        resolve(category === undefined ? products : productosFiltrados);
      }, 100);
    });

    prom.then((respuesta) => setItems(respuesta));
  }, [category]);

  return (
    <>
      {items.length === 0 ? (
        <h2>Cargando...</h2>
      ) : (
        <ItemList items={items} category={category} />
      )}
      ;
    </>
  );
};

export default ItemListContainer;
