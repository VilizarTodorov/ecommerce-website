import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { CHANGE_PASSWORD, PERSONAL_INFO, PROFILE, WISH_LIST } from "../../../constants/routes";
import ChangePassword from "../ChangePassword";
import MyAccount from "../MyAccount";
import PersonalInfo from "../PersonalInfo";
import WishList from "../WishList";

const Content = (props) => {
  const user = useSelector((state) => state.user.user);

  return (
    <section className="nested-routes">
      <Switch>
        <Route exact path={PROFILE}>
          <MyAccount firstName={user.firstName}></MyAccount>
        </Route>
        <Route exact path={`${PROFILE}${PERSONAL_INFO}`}>
          <PersonalInfo user={user}></PersonalInfo>
        </Route>
        <Route exact path={`${PROFILE}${WISH_LIST}`}>
          <WishList wishList={user.wishList}></WishList>
        </Route>
        <Route exact path={`${PROFILE}${CHANGE_PASSWORD}`}>
          <ChangePassword></ChangePassword>
        </Route>
      </Switch>
    </section>
  );
};

export default Content;
