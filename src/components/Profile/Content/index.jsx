import React from "react";
import { Route, Router, Switch, useLocation } from "react-router-dom";
import { CHANGE_PASSWORD, PERSONAL_INFO, PROFILE, WISH_LIST } from "../../../constants/routes";
import ChangePassword from "../ChangePassword";
import PersonalInfo from "../PersonalInfo";
import WishList from "../WishList";

const Content = (props) => {
  return (
    <section className="nested-routes">
      <Switch>
        <Route exact path={PROFILE}>
          hello
        </Route>
        <Route exact path={`${PROFILE}${PERSONAL_INFO}`}>
          <PersonalInfo></PersonalInfo>
        </Route>
        <Route exact path={`${PROFILE}${WISH_LIST}`}>
          <WishList></WishList>
        </Route>
        <Route exact path={`${PROFILE}${CHANGE_PASSWORD}`}>
          <ChangePassword></ChangePassword>
        </Route>
      </Switch>
    </section>
  );
};

export default Content;
