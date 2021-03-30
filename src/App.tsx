import { useEffect, useState } from "react";

import {
  Container,
  CssBaseline,
  Grid,
  LinearProgress,
} from "@material-ui/core";
import Header from "./component/Header";

//styles
import "./App.css";

import CoverPost from "./component/CoverPost";
import MediaCard from "./component/CardComponent";
import Footer from "./component/Footer";

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

  const addOrRemoveQty = (
    item: ShoppingCart,
    id: number,
    action: "add" | "remove"
  ) => {
    if (item.id === id) {
      if (action === "add") {
        item.itemQty += 1;
      } else if (action === "remove") {
        item.itemQty -= 1;
      }
    }
    return item;
  };

  const increaseQty = (id: number) => {
    setcart(cart.map((item) => addOrRemoveQty(item, id, "add")));
  };

  const decreaseQty = (id: number, qty: number, removeProduct: boolean) => {
    if (qty === 1 || removeProduct) {
      setcart(cart.filter((item) => item.id !== id));
    } else {
      setcart(cart.map((item) => addOrRemoveQty(item, id, "remove")));
    }
  };

  const addToCart = (cartItem: CardItemType) => {
    const { id, title, image, price } = cartItem;
    if (cartIncluds(id)) {
      setcart(cart.map((item) => addOrRemoveQty(item, id, "add")));
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
          cart={cart}
          sideDrawer={sideDrawer}
          handleDrawer={handleDrawer}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />

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
        <Footer />
      </Container>
    </>
  );
}

export default App;
