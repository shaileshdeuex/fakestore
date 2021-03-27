import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { ShoppingCart } from "../App";

type ShoppingCartCardProps = {
  item: ShoppingCart;
  increaseQty: (input: number) => void;
  decreaseQty: (input: number, input2: number) => void;
};

function ShoppingCartCard({
  item,
  increaseQty,
  decreaseQty,
}: ShoppingCartCardProps) {
  const { id, itemQty, itemName, image, price } = item;
  return (
    <Card className="ShoppingCartCard_root">
      <CardMedia image={image} className="ShoppingCartCard_image" />
      <div className="ShoppingCartCard_details">
        <CardContent>
          <Typography variant="body1">{itemName}</Typography>
          <Typography gutterBottom variant="h5">
            <strong>Price: ${price * itemQty}</strong>
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => increaseQty(id)}>
            <AddIcon />
          </IconButton>
          <span>{itemQty}</span>
          <IconButton onClick={() => decreaseQty(id, itemQty)}>
            <RemoveIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}

export default ShoppingCartCard;
