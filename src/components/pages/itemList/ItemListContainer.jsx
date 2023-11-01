import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  const [title, setTitle] = useState();

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

    if (category === "cereales") {
      setTitle("Cereales");
    } else if (category === "legumbres") {
      setTitle("Legumbres");
    } else if (category === "condimentos") {
      setTitle("Condimentos");
    } else if (category === "frutos-secos") {
      setTitle("Frutos Secos");
    } else if (category === "semillas") {
      setTitle("Semillas");
    }
  }, [category]);

  return (
    <>
      {items.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <ItemList items={items} title={title} />
      )}
      ;
    </>
  );
};

export default ItemListContainer;
