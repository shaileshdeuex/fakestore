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
import DeleteIcon from "@material-ui/icons/Delete";
import { ShoppingCart } from "../App";

type ShoppingCartCardProps = {
  cartId: number;
  item: ShoppingCart;
  increaseQty: (input: number) => void;
  decreaseQty: (input: number, input2: number, input3: boolean) => void;
};

function ShoppingCartCard({
  cartId,
  item,
  increaseQty,
  decreaseQty,
}: ShoppingCartCardProps) {
  const { id, itemQty, itemName, image, price } = item;
  return (
    <Card className="ShoppingCartCard_root" data-testid="cardContainer">
      <CardMedia image={image} className="ShoppingCartCard_image" />
      <div className="ShoppingCartCard_details">
        <CardContent>
          <Typography variant="body1">{itemName}</Typography>
          <Typography gutterBottom variant="h5">
            <strong>Price: ${price * itemQty}</strong>
          </Typography>
        </CardContent>
        <CardActions className="ShoppingCartCard_buttoncontainer">
          <div>
            <IconButton
              onClick={() => increaseQty(id)}
              data-testid="increaseQty"
            >
              <AddIcon />
            </IconButton>
            <span>{itemQty}</span>
            <IconButton
              data-testid="decreaseQty"
              onClick={() => decreaseQty(id, itemQty, false)}
            >
              <RemoveIcon />
            </IconButton>
          </div>
          <IconButton
            data-testid="deleteItem"
            onClick={() => decreaseQty(id, itemQty, true)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}

export default ShoppingCartCard;
