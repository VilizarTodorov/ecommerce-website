import React from "react";
import SignOut from "../SignOut";
import { CHANGE_PASSWORD, PERSONAL_INFO, PROFILE } from "../../constants/routes";
import { Link } from "react-router-dom";
import Content from "./Content";
import "./styles.scss";
import { useSelector } from "react-redux";
import { namesSelector } from "../../helpers/selectors";
import { withAuthorizationFunction } from "../../HOC";

const Profile = (props) => {
  const { firstName, lastName } = useSelector(namesSelector);

  return (
    <div className="profile">
      <aside className="aside">
        <header className="aside-header">
          <i className="far fa-user-circle fa-4x"></i>
          <h2>
            {firstName} {lastName}
          </h2>
        </header>
        <nav className="aside-nav">
          <ul>
            <li className="aside-nav-option">
              <Link to={PROFILE}>my account</Link>
            </li>
            <li className="aside-nav-option">
              <Link to={`${PROFILE}${PERSONAL_INFO}`}>personal info</Link>
            </li>
            <li className="aside-nav-option">
              <Link to={`${PROFILE}${CHANGE_PASSWORD}`}>change password</Link>
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


const condition = (user) => user;

export default withAuthorizationFunction(condition)(Profile);
