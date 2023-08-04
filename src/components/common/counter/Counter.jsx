import { Box, Button, Grid } from "@mui/material";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "7.5rem",
        width: "14rem",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={restar}>
          Restar
        </Button>
        <h3>{contador}</h3>
        <Button variant="contained" onClick={sumar}>
          Sumar
        </Button>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          fullWidth="true"
          onClick={() => onAdd(contador)}
        >
          Agregar al Carrito
        </Button>
      </Grid>
    </Box>
  );
};

export default Counter;
