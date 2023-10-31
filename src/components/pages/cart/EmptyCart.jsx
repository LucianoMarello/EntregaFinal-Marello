import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <Box>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: "12rem",
        }}
      >
        <h1>No hay productos en el carrito</h1>
        <Link to="/tienda">
          <Button variant="contained">Ir a la Tienda</Button>
        </Link>
      </Grid>
    </Box>
  );
};

export default EmptyCart;
