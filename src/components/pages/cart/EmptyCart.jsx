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
          justifyContent: "space-between",
          minHeight: "15rem",
        }}
      >
        <h1 className="lines-effect">Carrito</h1>

        <h2>No hay productos en el carrito</h2>
        <Link to="/tienda">
          <Button variant="contained">Ir a la Tienda</Button>
        </Link>
      </Grid>
    </Box>
  );
};

export default EmptyCart;
