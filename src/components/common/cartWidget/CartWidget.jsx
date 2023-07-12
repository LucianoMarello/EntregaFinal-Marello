import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Box sx={{ paddingRight: "3rem" }}>
      <Link to="/cart">
        <IconButton aria-label="cart">
          <Badge badgeContent={5} color="primary">
            <ShoppingCart color="action" />
          </Badge>
        </IconButton>
      </Link>
    </Box>
  );
};

export default CartWidget;
