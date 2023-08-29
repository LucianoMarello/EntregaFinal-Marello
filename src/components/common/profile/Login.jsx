import { AccountCircle } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Login = ({ open, handleClick, handleClose, anchorEl }) => {
  return (
    <div>
      <Button
        sx={{ color: "black" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<AccountCircle />}
      >
        Mi Cuenta
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/checkout">Iniciar Sesión</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/register">Crear Cuenta</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Login;
