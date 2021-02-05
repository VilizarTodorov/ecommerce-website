import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const ComponentProductType = React.lazy(() => import("../ComponentProductType"));
const Profile = React.lazy(() => import("../Profile"));
const Admin = React.lazy(() => import("../Admin"));
const ComponentMainCategory = React.lazy(() => import("../ComponentMainCategory"));
const ComponentSubCategory = React.lazy(() => import("../ComponentSubCategory"));
const Home = React.lazy(() => import("../Home"));
const SignIn = React.lazy(() => import("../SignIn"));
const SignUp = React.lazy(() => import("../SignUp"));
const SpecificProduct = React.lazy(() => import("../SpecificProduct"));
const Cart = React.lazy(() => import("../Cart"));
const ResetPassword = React.lazy(() => import("../ResetPassword"));

const Routes = () => {
  return (
    <Suspense fallback={`...Loading`}>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home></Home>
        </Route>
        <Route exact path={ROUTES.CART}>
          <Cart></Cart>
        </Route>
        <Route path={ROUTES.PROFILE}>
          <Profile></Profile>
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
        <Route exact path={ROUTES.PRODUCT_TYPE}>
          <ComponentProductType></ComponentProductType>
        </Route>
        <Route exact path={ROUTES.SPECIFIC_PRODUCT}>
          <SpecificProduct></SpecificProduct>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
