import { Box, Grid } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ producto, onAdd, initial }) => {
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
        <img className="imgProd" src={producto.img} alt={producto.name} />
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
          <h1>{producto.name}</h1>
          <h2>Precio por Unidad: {producto.price}</h2>
          <h3>Descripcion: {producto.description}</h3>
          <CounterContainer
            stock={producto.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
