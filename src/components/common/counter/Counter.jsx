import { Box, Grid } from "@mui/material";
import "./Counter.css";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        width: "15rem",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button onClick={restar}>-</button>
        <h3>{contador}</h3>
        <button onClick={sumar}>+</button>
      </Grid>
      <button onClick={() => onAdd(contador)}>Agregar al Carrito</button>
    </Box>
  );
};

export default Counter;
