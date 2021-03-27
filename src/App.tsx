import { useEffect, useState } from "react";

import {
  Container,
  CssBaseline,
  Grid,
  LinearProgress,
  Drawer,
} from "@material-ui/core";
import Header from "./component/Header";

//styles
import "./App.css";

import CoverPost from "./component/CoverPost";
import MediaCard from "./component/CardComponent";
import ShoppingCartCard from "./component/ShoppingCartCard";

export type CardItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
};

export type ShoppingCart = {
  id: number;
  itemQty: number;
  itemName: string;
  image: string;
  price: number;
};

function App() {
  const [sideDrawer, setsideDrawer] = useState(false);
  const [cart, setcart] = useState([] as ShoppingCart[]);
  const [appState, setAppState] = useState({
    loading: false,
    data: [],
  } as {
    loading: boolean;
    data: CardItemType[] | [];
  });

  useEffect(() => {
    setAppState({ loading: true, data: [] });
    const apiUrl = "https://fakestoreapi.com/products";
    fetch(apiUrl)
      .then((res) => res.json())
      .then(async (shopingData) =>
        setAppState({ loading: false, data: shopingData })
      )
      .catch((err) => {
        console.log(err);
        setAppState({ loading: false, data: [] });
      });
  }, [setAppState]);

  const cartIncluds = (id: number) => {
    let includs = false;
    for (const cartData of cart) {
      if (id === cartData.id) {
        includs = true;
        break;
      }
    }
    return includs;
  };

  const increaseQty = (id: number) => {
    setcart(
      cart.map((item) => {
        if (item.id === id) {
          item.itemQty += 1;
        }
        return item;
      })
    );
  };
  const decreaseQty = (id: number, qty: number) => {
    if (qty === 1) {
      setcart(cart.filter((item) => item.id !== id));
    } else {
      setcart(
        cart.map((item) => {
          if (item.id === id) {
            item.itemQty -= 1;
          }
          return item;
        })
      );
    }
  };

  const addToCart = (cartItem: CardItemType) => {
    const { id, title, image, price } = cartItem;
    if (cartIncluds(id)) {
      setcart(
        cart.map((item) => {
          if (item.id === id) {
            item.itemQty += 1;
          }
          return item;
        })
      );
    } else {
      setcart([...cart, { id, itemQty: 1, itemName: title, image, price }]);
    }
  };

  const handleDrawer = (open: boolean) => {
    setsideDrawer(open);
  };
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          cartCount={cart.reduce((pre, curr) => pre + curr.itemQty, 0)}
          sideDrawer={sideDrawer}
          handleDrawer={handleDrawer}
        />
        <Drawer
          anchor="right"
          open={sideDrawer}
          onClose={() => handleDrawer(false)}
        >
          <div className="shoppingCartCard_Container">
            {cart.map((item, id) => (
              <ShoppingCartCard
                key={id}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
              />
            ))}
          </div>
        </Drawer>
        <main>
          <CoverPost />
          {appState.loading && <LinearProgress />}
          <Container maxWidth="lg" className="data_container">
            <Grid container spacing={4}>
              {appState.data.map((item: CardItemType) => (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <MediaCard item={item} addToCart={addToCart} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </Container>
    </>
  );
}

export default App;
