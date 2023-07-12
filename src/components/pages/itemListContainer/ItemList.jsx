import { Box, Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <Box>
      <h2>Productos</h2>
      <Grid container>
        {items.map((elemento) => {
          return (
            <Grid item key={elemento.id} xs={12} sm={6} md={4}>
              <ProductCard key={elemento.id} elemento={elemento} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ItemList;
