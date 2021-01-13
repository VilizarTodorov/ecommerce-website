import React from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import ComponentMainCategory from "../ComponentMainCategory";
import Home from "../Home";
// import Kids from "../Kids";
// import Men from "../Men";
// import Women from "../Women";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Home></Home>
      </Route>
{/* 
      <Route exact path={ROUTES.WOMEN}>
        <Women></Women>
      </Route>

      <Route exact path={ROUTES.MEN}>
        <Men></Men>
      </Route>

      <Route exact path={ROUTES.KIDS}>
        <Kids></Kids>
      </Route> */}

      <Route exact path={ROUTES.CATEGORY}>
        <ComponentMainCategory></ComponentMainCategory>
      </Route>
    </Switch>
  );
};

export default Routes;
