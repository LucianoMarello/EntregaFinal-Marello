import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ Width: 345 }}>
      <CardMedia
        component="img"
        alt={elemento.name}
        height="280rem"
        image={elemento.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button size="small">Ver Producto</Button>
        </Link>
        <Button size="small">Añadir al Carrito</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
