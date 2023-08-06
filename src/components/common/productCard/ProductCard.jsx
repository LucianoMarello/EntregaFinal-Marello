import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ element }) => {
  return (
    <Card sx={{ Width: 345, border: 0.2, margin: 2 }}>
      <Link to={`/itemDetail/${element.id}`}>
        <CardMedia
          component="img"
          alt={element.name}
          height="380rem"
          image={element.img}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${element.id}`}>
          <Button size="small">Ver Producto</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
