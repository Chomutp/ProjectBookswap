import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Mybook from "./pages/Mybook";
import Addbook from "./pages/Addbook";
import Shoppingcart from "./pages/Shoppingcart";
import Swap from "./pages/Swap";
import Store from "./pages/Store";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/mybook" component={Mybook} />
        <Route exact path="/addbook" component={Addbook} />
        <Route exact path="/shoppingcart" component={Shoppingcart} />
        <Route exact path="/swap" component={Swap} />
        <Route exact path="/store" component={Store} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
