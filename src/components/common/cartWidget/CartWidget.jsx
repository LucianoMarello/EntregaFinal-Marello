import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const totalProducts = getTotalQuantity();
  return (
    <Box sx={{ paddingRight: "3rem" }}>
      <Link to="/cart">
        <IconButton aria-label="cart">
          <Badge badgeContent={totalProducts} color="primary">
            <ShoppingCart color="action" />
          </Badge>
        </IconButton>
      </Link>
    </Box>
  );
};

export default CartWidget;
