import { Box, Grid } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginContainer from "../../common/profile/LoginContainer";
import SearchBar from "../../common/searchBar/SearchBar";

export const Navbar = () => {
  return (
    <Box>
      <Grid className="container">
        <Link to="/">
          <img
            className="imgLogo"
            src="https://res.cloudinary.com/dqpt6x98p/image/upload/v1687367471/ADN-Rosario/logoADN_z4b5tt.jpg"
            alt="logoADN"
          />
        </Link>

        <SearchBar />

        <LoginContainer />

        <CartWidget />
      </Grid>
      <Grid>
        <ul className="nav">
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
      </Grid>
    </Box>
  );
};
