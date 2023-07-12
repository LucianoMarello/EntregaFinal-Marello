import { Box } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box>
      <div className="container">
        <ul className="nav">
          <li>
            <Link to="/">
              <img
                className="imgLogo"
                src="https://res.cloudinary.com/dqpt6x98p/image/upload/v1687367471/ADN-Rosario/logoADN_z4b5tt.jpg"
                alt="logoADN"
              />
            </Link>
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/">Tienda</Link>
          </li>
          <li>
            <Link to="/tienda/cereales">Cereales</Link>
          </li>
          <li>
            <Link to="/tienda/legumbres">Legumbres</Link>
          </li>
          <li>
            <Link to="/tienda/condimentos">Condimentos</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </Box>
  );
};
