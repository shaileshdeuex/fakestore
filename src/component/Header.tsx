import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

type HeaderProp = {
  cartCount: number;
  sideDrawer: boolean;
  handleDrawer: (input: boolean) => void;
};

function Header({ cartCount, sideDrawer, handleDrawer }: HeaderProp) {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar className="header_menuBar">
        <Typography variant="h6" color="textSecondary">
          Fake Store
        </Typography>
        <IconButton
          aria-label="add to shopping cart"
          onClick={() => handleDrawer(true)}
        >
          <Badge badgeContent={cartCount} color="secondary">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
