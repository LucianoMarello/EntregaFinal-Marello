import { Box, Grid } from "@mui/material";
import "./Counter.css";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <Box
      sx={{
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
        <button className="count-button" onClick={restar}>
          -
        </button>
        <span className="value">{contador}</span>
        <button className="count-button" onClick={sumar}>
          +
        </button>
      </Grid>
      <button
        className="count-button add-button"
        onClick={() => onAdd(contador)}
      >
        Agregar al Carrito
      </button>
    </Box>
  );
};

export default Counter;
