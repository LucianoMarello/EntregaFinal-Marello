import { Search } from "@mui/icons-material";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";

const SearchBar = () => {
  const { cart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    getDocs(productsCollection).then((res) => {
      let prods = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(prods);
    });
  }, []);

  const redirectToProduct = (name) => {
    const prod = products.find((element) => element.name === name);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = `../itemDetail/${prod.id}`;
  };

  return (
    <div>
      <Autocomplete
        options={products.map((option) => {
          return option.name;
        })}
        onChange={(event, val) => {
          redirectToProduct(val);
        }}
        renderInput={(params) => (
          <TextField
            sx={{ width: "25rem" }}
            color="success"
            {...params}
            label="Buscar productos"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      {}
    </div>
  );
};

export default SearchBar;
