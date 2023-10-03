import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../productMock";
import { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import "./Dashboard.css";

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
      <Box
        sx={{
          width: "80%",
          minHeight: "10rem",
          margin: "0 10%",
        }}
      >
        <table>
          <tr>
            <th>Productos</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Descripción</th>
          </tr>
          {prods.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.name}</td>
                <td>
                  <TextField
                    variant="standard"
                    defaultValue={element.price}
                    sx={{ width: "3rem" }}
                  ></TextField>
                </td>
                <td>{element.category}</td>
                <td>
                  <TextField
                    variant="standard"
                    defaultValue={element.stock}
                    sx={{ width: "3rem" }}
                  ></TextField>
                </td>
                <td>{element.description}</td>
              </tr>
            );
          })}
        </table>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "2rem",
          }}
        >
          <Button variant="contained" color="secondary" onClick={fill}>
            RELLENAR
          </Button>
          <Button variant="contained" color="secondary">
            Guardar Cambios
          </Button>
          <Button variant="contained" color="secondary">
            Reestablecer
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default DashboardContainer;
