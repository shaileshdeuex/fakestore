import {
  AppBar,
  Badge,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

type HeaderProp = {
  sideDrawer: boolean;
  handleDrawer: (input: boolean) => void;
};

function Header({ sideDrawer, handleDrawer }: HeaderProp) {
  return (
    <AppBar position="relative" elevation={0}>
      <Toolbar className="header_menuBar">
        <Typography variant="h6" color="textPrimary">
          Fake Store
        </Typography>
        <IconButton
          aria-label="add to shopping cart"
          onClick={() => handleDrawer(true)}
        >
          <Badge badgeContent={17} color="secondary">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <Drawer
          anchor="right"
          open={sideDrawer}
          onClose={() => handleDrawer(false)}
        >
          Hello from Drawer!
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
