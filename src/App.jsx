import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Cart } from "./components/pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/tienda/:categoria" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
        {/* Hace algo mas lindo para el error 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
