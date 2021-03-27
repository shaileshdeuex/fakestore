import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardItemType } from "../App";

const useStyles = makeStyles({
  media: {
    height: "400px",
  },
});

const displayLimitedChar = (input: string, len: number) =>
  input.substring(0, len).concat("...");

export default function MediaCard(props: CardItemType) {
  const classes = useStyles();
  const { id, category, description, image, price, title } = props;
  return (
    <Card className="mediaCard_root">
      <CardActionArea style={{ flexGrow: 3 }} className="mediaCard_body">
        <CardMedia className={classes.media} image={image} />
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
            <strong>Price: {price}</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          className="mediaCard_button"
          onClick={() => console.log(id)}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
