import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Cart } from "./components/pages/cart/Cart";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
