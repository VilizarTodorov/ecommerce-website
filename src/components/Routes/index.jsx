import React from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import ComponentMainCategory from "../ComponentMainCategory";
import ComponentSubCategory from "../ComponentSubCategory";
import Home from "../Home";
import SignIn from "../SignIn";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Home></Home>
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <SignIn></SignIn>
      </Route>
      <Route exact path={ROUTES.CATEGORY}>
        <ComponentMainCategory></ComponentMainCategory>
      </Route>
      <Route exact path={ROUTES.SUB_CATEGORY}>
        <ComponentSubCategory></ComponentSubCategory>
      </Route>
    </Switch>
  );
};

export default Routes;
