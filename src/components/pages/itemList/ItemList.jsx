import { Box, Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items, title }) => {
  return (
    <Box>
      <h1>{title ? title : "Productos"}</h1>
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
