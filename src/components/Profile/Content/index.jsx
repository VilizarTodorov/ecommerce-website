import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { CHANGE_PASSWORD, PERSONAL_INFO, PROFILE } from "../../../constants/routes";
import { userSelector } from "../../../helpers/selectors";
import ChangePassword from "../ChangePassword";
import MyAccount from "../MyAccount";
import PersonalInfo from "../PersonalInfo";

const Content = (props) => {
  const user = useSelector(userSelector);

  return (
    <section className="nested-routes">
      <Switch>
        <Route exact path={PROFILE}>
          <MyAccount firstName={user.firstName}></MyAccount>
        </Route>
        <Route exact path={`${PROFILE}${PERSONAL_INFO}`}>
          <PersonalInfo user={user}></PersonalInfo>
        </Route>
        <Route exact path={`${PROFILE}${CHANGE_PASSWORD}`}>
          <ChangePassword></ChangePassword>
        </Route>
      </Switch>
    </section>
  );
};

export default Content;
