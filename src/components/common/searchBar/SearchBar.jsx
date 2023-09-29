import { Search } from "@mui/icons-material";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";

const SearchBar = () => {
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
