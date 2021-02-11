import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { HOME, SIGN_IN } from "../constants/routes";
import { userSelector } from "../helpers/selectors";

const withAuthorizationFunction = (condition) => (Component) => {
  const WithAuthorizationFunction = () => {
    const user = useSelector(userSelector);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
      if (!condition(user)) {
        if (location.pathname === "/sign-in" || location.pathname === "/sign-up" || location.pathname === "/admin") {
          history.push(HOME);
          return;
        }
        history.push(SIGN_IN, { from: location.pathname });
        return;
      }
    }, [user, history, location.pathname]);

    return <Fragment>{condition(user) ? <Component></Component> : null}</Fragment>;
  };

  return WithAuthorizationFunction;
};

export default withAuthorizationFunction;
