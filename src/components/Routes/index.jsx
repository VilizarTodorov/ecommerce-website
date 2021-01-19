import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
// import Admin from "../Admin";
// import ComponentMainCategory from "../ComponentMainCategory";
// import ComponentSubCategory from "../ComponentSubCategory";
// import Home from "../Home";
// import ResetPassword from "../ResetPassword";
// import SignIn from "../SignIn";
// import SingUp from "../SignUp";

const Admin = React.lazy(() => import("../Admin"));
const ComponentMainCategory = React.lazy(() => import("../ComponentMainCategory"));
const ComponentSubCategory = React.lazy(() => import("../ComponentSubCategory"));
const Home = React.lazy(() => import("../Home"));
const ResetPassword = React.lazy(() => "../ResetPassword");
const SignIn = React.lazy(() => import("../SignIn"));
const SignUp = React.lazy(() => import("../SignUp"));

const Routes = () => {
  return (
    <Suspense fallback={`...Loading`}>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home></Home>
        </Route>
        <Route exact path={ROUTES.ADMIN}>
          <Admin></Admin>
        </Route>
        <Route exact path={ROUTES.RESET_PASSWORD}>
          <ResetPassword></ResetPassword>
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp></SignUp>
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <SignIn></SignIn>
        </Route>
        <Route exact path={ROUTES.CATEGORY}>
          <ComponentMainCategory></ComponentMainCategory>
        </Route>
        <Route exact path={ROUTES.SUB_CATEGORY}>
          <ComponentSubCategory></ComponentSubCategory>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
