import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const totalQuantity = getQuantityById(id);

  const notify = (item) => {
    toast.info(`Se agregaron ${item.quantity} unidad/es de ${item.name}`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "light",
    });
  };

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProduct({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (quantity) => {
    let productCart = { ...product, quantity: quantity };
    addToCart(productCart);
    notify(productCart);
  };

  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} initial={totalQuantity} />
    </div>
  );
};

export default ItemDetailContainer;
