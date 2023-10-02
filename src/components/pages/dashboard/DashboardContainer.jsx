import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../productMock";
import { useState } from "react";
import { Box, Grid, TextField } from "@mui/material";

const DashboardContainer = () => {
  const [prods, setProds] = useState(products);

  const fill = () => {
    products.forEach((product) => {
      let refCollection = collection(db, "products");
      addDoc(refCollection, product);
    });
  };

  return (
    <div>
      <h1>DASHBOARD</h1>
      <Box sx={{ margin: "3rem" }}>
        <h2>Productos</h2>
        {prods.map((element, index) => {
          return (
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              item
              key={index}
            >
              <h2>{element.name} - </h2>
              <Grid sx={{ display: "flex" }}>
                <h2>- Stock: </h2>
                <TextField
                  variant="standard"
                  sx={{ width: "3rem", marginLeft: "1rem" }}
                  defaultValue={element.stock}
                ></TextField>
              </Grid>
            </Grid>
          );
        })}
        <button onClick={fill}>RELLENAR</button>
      </Box>
    </div>
  );
};

export default DashboardContainer;
