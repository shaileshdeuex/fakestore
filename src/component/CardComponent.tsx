import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { CardItemType } from "../App";

type MediaCardProps = {
  item: CardItemType;
  addToCart: (input: CardItemType) => void;
};

const displayLimitedChar = (input: string, len: number) =>
  input.substring(0, len).concat("...");

export default function MediaCard({ item, addToCart }: MediaCardProps) {
  const { category, description, image, price, title } = item;
  return (
    <Card className="mediaCard_root">
      <CardActionArea style={{ flexGrow: 3 }} className="mediaCard_body">
        <CardMedia className="MediaCard_image" image={image} />
        <CardContent className="mediaCard_body">
          <div>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="caption">{category}</Typography>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {displayLimitedChar(description, 200)}
          </Typography>
          <Typography gutterBottom variant="h5">
            <strong>Price: ${price}</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          className="mediaCard_button"
          onClick={() => addToCart(item)}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
