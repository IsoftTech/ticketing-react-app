import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "./core/About";
import Contact from "./core/Contact";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
