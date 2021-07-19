import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

const Home = lazy(() => import("./components/home/Home"));
const ShoppingListHistory = lazy(() =>
  import("./components/shoppingListHistory/ShoppingListHistory")
);
const CreateShoppingList = lazy(() =>
  import("./components/createShoppingList/CreateShoppingList")
);
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <br />
          <br />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/shoppingListHistory"
                component={ShoppingListHistory}
              />
              <Route
                path="/createShoppingList"
                component={CreateShoppingList}
              />
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </Router>
        <br />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
