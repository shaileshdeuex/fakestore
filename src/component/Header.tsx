import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { ShoppingCart } from "../App";
import CartDrawer from "./CartDrawer";

export type HeaderProp = {
  sideDrawer: boolean;
  handleDrawer: (input: boolean) => void;
  cart: ShoppingCart[];
  increaseQty: (input: number) => void;
  decreaseQty: (id: number, qty: number, removeProduct: boolean) => void;
};

function Header({
  sideDrawer,
  handleDrawer,
  cart,
  increaseQty,
  decreaseQty,
}: HeaderProp) {
  return (
    <AppBar position="sticky" elevation={0} data-testid="header">
      <Toolbar className="header_menuBar">
        <Typography variant="h6" color="textSecondary">
          Fake Store
        </Typography>
        <IconButton
          aria-label="add to shopping cart"
          data-testid="addToCartIcon"
          onClick={() => handleDrawer(true)}
        >
          <Badge
            badgeContent={cart.reduce((pre, curr) => pre + curr.itemQty, 0)}
            color="secondary"
          >
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
      <CartDrawer
        cart={cart}
        sideDrawer={sideDrawer}
        handleDrawer={handleDrawer}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />
    </AppBar>
  );
}

export default Header;
