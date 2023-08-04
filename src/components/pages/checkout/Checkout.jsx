import { Box, Button, TextField } from "@mui/material";
import "./checkout.css";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <Box>
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
    </Box>
  );
};

export default Checkout;
