import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";

const CartWidget = () => {
  return (
    <Box sx={{ paddingRight: "3rem" }}>
      <IconButton aria-label="cart">
        <Badge badgeContent={5} color="primary">
          <ShoppingCart color="action" />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default CartWidget;
