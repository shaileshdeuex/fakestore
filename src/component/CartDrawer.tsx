import { Drawer, Typography, Divider } from "@material-ui/core";
import ShoppingCartCard from "./ShoppingCartCard";

//styles
import "../App.css";
import { HeaderProp } from "./Header";

function CartDrawer({
  sideDrawer,
  handleDrawer,
  cart,
  increaseQty,
  decreaseQty,
}: HeaderProp) {
  return (
    <Drawer
      anchor="right"
      open={sideDrawer}
      onClose={() => handleDrawer(false)}
    >
      <div className="shoppingCartCard_Container">
        {cart.length ? (
          <>
            <div className="shoppingCartTotal">
              <Typography variant="h5">Total</Typography>
              <Typography variant="h5">
                $
                {cart
                  .reduce((pre, curr) => pre + curr.price * curr.itemQty, 0)
                  .toFixed(2)}
              </Typography>
            </div>
            <Divider />
            {cart.map((item, id) => (
              <ShoppingCartCard
                key={id}
                cartId={id}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
              />
            ))}
          </>
        ) : (
          <div className="noCartItem_container">
            <Typography variant="h6" color="textSecondary">
              No Item Added to The Cart
            </Typography>
          </div>
        )}
      </div>
    </Drawer>
  );
}

export default CartDrawer;
