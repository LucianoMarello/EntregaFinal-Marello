import { Box, Button, Grid, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./Cart.css";
import { Check, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Cart = ({ cart, emptyCart, deleteById }) => {
  return (
    <Box>
      <h1 className="lines-effect">Carrito</h1>
      {cart.map((element) => {
        return (
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={element.id}
          >
            <h2>
              {element.name} - {element.quantity} unidad/es
            </h2>
            <IconButton color="error" onClick={() => deleteById(element.id)}>
              <HighlightOffIcon />
            </IconButton>
          </Grid>
        );
      })}
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "3rem",
        }}
      >
        <Link to="/checkout">
          <Button variant="outlined" color="success" startIcon={<Check />}>
            Comprar ahora
          </Button>
        </Link>
        <Button
          sx={{ marginLeft: "2rem" }}
          variant="outlined"
          color="error"
          startIcon={<Delete />}
          onClick={() => emptyCart()}
        >
          Vaciar Carrito
        </Button>
      </Grid>
    </Box>
  );
};
