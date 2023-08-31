import { Box, Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items, category }) => {
  return (
    <Box>
      <h1>{category ? `Productos: ${category}` : "Productos"}</h1>
      <Grid container>
        {items.map((element) => {
          return (
            <Grid item key={element.id} xs={12} sm={6} md={4}>
              <ProductCard key={element.id} element={element} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ItemList;
