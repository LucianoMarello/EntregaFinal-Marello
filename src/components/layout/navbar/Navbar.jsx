import { Box } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <Box className="container">
      <ul className="nav">
        <li>
          <a href="#">
            <img
              className="imgLogo"
              src="https://res.cloudinary.com/dqpt6x98p/image/upload/v1687367471/logoADN_z4b5tt.jpg"
              alt="logoADN"
            />
          </a>
        </li>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Tienda</a>
        </li>
        <li>
          <a href="#">Iniciar sesión</a>
        </li>
        <li>
          <a href="#">Regristrarse</a>
        </li>
        <li>
          <a href="#">Contactanos</a>
        </li>
      </ul>
      <CartWidget />
    </Box>
  );
};
