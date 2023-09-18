import { Box, Grid } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ product, onAdd, initial }) => {
  return (
    <Box>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "2rem 5%",
          height: "70vh",
        }}
      >
        <img className="imgProd" src={product.img} alt={product.name} />
        <Grid
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "12% 0",
            width: "20rem",
          }}
        >
          <h1 className="nomProd">{product.name}</h1>
          <h2>Precio por Unidad: {product.price}</h2>
          <h3>Descripcion: {product.description}</h3>
          {product.stock === 0 ? (
            <h2>No hay stock del producto</h2>
          ) : (
            <CounterContainer
              stock={product.stock}
              onAdd={onAdd}
              initial={initial}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
