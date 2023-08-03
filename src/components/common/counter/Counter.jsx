import { Box, Button, Grid } from "@mui/material";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <Box>
      <Grid
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="outlined" onClick={restar}>
          Restar
        </Button>
        <h3>{contador}</h3>
        <Button variant="outlined" onClick={sumar}>
          Sumar
        </Button>
      </Grid>
      <Grid>
        <Button variant="outlined" onClick={() => onAdd(contador)}>
          Agregar al Carrito
        </Button>
      </Grid>
    </Box>
  );
};

export default Counter;
