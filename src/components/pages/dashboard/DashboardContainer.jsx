import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../productMock";

const DashboardContainer = () => {
  const rellenar = () => {
    products.forEach((product) => {
      let refCollection = collection(db, "products");
      addDoc(refCollection, product);
    });
  };

  return (
    <div>
      <h1>DASHBOARD</h1>
      <button onClick={rellenar}>RELLENAR</button>
    </div>
  );
};

export default DashboardContainer;
