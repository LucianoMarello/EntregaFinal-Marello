import { Box, Button, Grid, TextField } from "@mui/material";
import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = ({
  handleSubmit,
  handleChange,
  errors,
  cart,
  total,
  orderId,
  clearCart,
}) => {
  return (
    <Box>
      <h1 className="lines-effect">Checkout</h1>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            margin="dense"
            type="text"
            label="Nombre"
            name="name"
            error={errors.name ? true : false}
            variant="outlined"
            onChange={handleChange}
            helperText={errors.name}
          />
          <TextField
            margin="dense"
            type="text"
            label="Email"
            name="email"
            error={errors.email ? true : false}
            variant="outlined"
            onChange={handleChange}
            helperText={errors.email}
          />
          <TextField
            margin="dense"
            type="password"
            label="Contraseña"
            name="password"
            error={errors.password ? true : false}
            variant="outlined"
            onChange={handleChange}
            helperText={errors.password}
          />
          <TextField
            margin="dense"
            type="password"
            label="Repetir contraseña"
            name="repeatPassword"
            error={errors.repeatPassword ? true : false}
            variant="outlined"
            onChange={handleChange}
            helperText={errors.repeatPassword}
          />
          <Button
            sx={{ marginTop: "1rem" }}
            color="success"
            type="submit"
            variant="contained"
          >
            Confirmar Compra
          </Button>
        </form>
        <Grid className="detail">
          <h1>Detalle de compra</h1>
          {cart.map((element) => {
            return (
              <h2 key={element.name}>
                - {element.quantity} unidad/es de {element.name} x $
                {element.price} = ${element.price * element.quantity}
              </h2>
            );
          })}
          <h2 className="details">Total: ${total}</h2>
          {orderId && (
            <div>
              <h2 className="details">Su compra finalizó</h2>
              <h4 className="details">Orden de compra: {orderId}</h4>
              <Link className="final" to="/">
                <Button onClick={clearCart} variant="outlined" color="success">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
