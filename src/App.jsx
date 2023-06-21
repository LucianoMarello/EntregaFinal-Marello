import { useState } from "react";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const [greeting, setGreeting] = useState("Hola, ¿Como estas?");
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;
