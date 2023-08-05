import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let reference;
    if (category) {
      reference = query(productsCollection, where("category", "==", category));
    } else {
      reference = productsCollection;
    }
    getDocs(reference).then((res) => {
      let products = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(products);
    });
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
