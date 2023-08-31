import { Box, Button, Grid, TextField } from "@mui/material";

const Register = ({ handleSubmit, handleChange, errors }) => {
  return (
    <Box>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Crear Cuenta</h1>
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
            Crear Cuenta
          </Button>
        </form>
      </Grid>
    </Box>
  );
};

export default Register;
