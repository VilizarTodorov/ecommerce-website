import React from "react";
import SignOut from "../SignOut";
import { CHANGE_PASSWORD, HOME, PERSONAL_INFO, WISH_LIST } from "../../constants/routes";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import "./styles.scss";
import Content from "./Content";

const WishList = React.lazy(() => import("./WishList"));

const Profile = (props) => {
  let { path, url } = useRouteMatch();
  console.log(path, url);

  return (
    <div className="profile">
      <aside className="aside">
        <header className="aside-header">
          <i className="far fa-user-circle fa-4x"></i>
          <h2>firstName lastName</h2>
        </header>
        <nav className="aside-nav">
          <ul>
            <li className="aside-nav-option">
              <Link to={HOME}>home</Link>
            </li>
            <li className="aside-nav-option">
              <Link to={`${url}${PERSONAL_INFO}`}>personal info</Link>
            </li>
            <li className="aside-nav-option">
              <Link to={`${url}${CHANGE_PASSWORD}`}>change password</Link>
            </li>
            <li className="aside-nav-option">
              <Link to={`${url}${WISH_LIST}`}>wish list</Link>
            </li>
            <li className="aside-nav-option">
              <SignOut></SignOut>
            </li>
          </ul>
        </nav>
      </aside>
      <Content></Content>
    </div>
  );
};

export default Profile;
