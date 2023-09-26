import { AccountCircle } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Logged = ({
  open,
  handleClick,
  handleClose,
  anchorEl,
  logOff,
  userName,
}) => {
  return (
    <div>
      <Button
        sx={{ color: "#2B8180" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<AccountCircle />}
      >
        {userName === "" ? "Sin nombre" : userName}
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
          <Link to="/myProfile">Mi Cuenta</Link>
        </MenuItem>
        <MenuItem onClick={logOff}>
          <Link to="/">Cerrar Sesión</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Logged;
