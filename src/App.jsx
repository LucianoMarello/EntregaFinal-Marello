import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import CartContextProvider from "./context/CartContext";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
