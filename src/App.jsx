import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Cart } from "./components/pages/cart/Cart";
import Home from "./components/pages/home/Home";
import { ProbandoMui } from "./components/pages/probandoMui/ProbandoMui";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Cart />
      <ProbandoMui/>
      <Footer />
    </div>
  );
}

export default App;
