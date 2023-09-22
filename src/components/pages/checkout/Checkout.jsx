import { Box, Button, Grid, TextField } from "@mui/material";
import "./Checkout.css";

const Checkout = ({
  handleSubmit,
  handleChange,
  errors,
  cart,
  total,
  orderId,
}) => {
  return (
    <Box>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "4rem",
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
        <Grid>
          <h1 className="details">Detalle de compra</h1>
          {cart.map((element) => {
            return (
              <h2 key={element.name} className="details">
                - {element.quantity} unidad/es de {element.name} x $
                {element.price} = ${element.price * element.quantity}
              </h2>
            );
          })}
          <h2 className="details">Total: ${total}</h2>
          {orderId && (
            <div>
              <h2>Su compra finalizó</h2>
              <h4>Orden de compra: {orderId}</h4>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
