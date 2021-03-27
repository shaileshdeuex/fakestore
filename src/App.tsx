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

export type CardItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
};

// const getProduct = async (): Promise<CardItemType[]> =>
//   await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
  const [sideDrawer, setsideDrawer] = useState(false);
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
      );
  }, [setAppState]);

  const handleDrawer = (open: boolean) => {
    setsideDrawer(open);
  };
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sideDrawer={sideDrawer} handleDrawer={handleDrawer} />
        <main>
          <CoverPost />
          {appState.loading && <LinearProgress />}
          <Container maxWidth="lg" className="data_container">
            <Grid container spacing={4}>
              {appState.data.map((item: CardItemType) => (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <MediaCard {...item} />
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
