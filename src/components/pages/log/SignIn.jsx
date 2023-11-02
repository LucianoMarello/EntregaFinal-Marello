import { Box, Button, Grid, TextField } from "@mui/material";
import SignInWithGoogle from "../../common/signInWithGoogle/SignInWithGoogle";

const SignIn = ({ handleSubmit, handleChange, errors }) => {
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
        <h1 className="lines-effect">Iniciar Sesión</h1>
        <form className="form" onSubmit={handleSubmit}>
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
          <Button
            sx={{ marginTop: "1rem" }}
            color="success"
            type="submit"
            variant="contained"
          >
            Iniciar Sesión
          </Button>
        </form>
        <SignInWithGoogle />
      </Grid>
    </Box>
  );
};

export default SignIn;
