import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";
import HeaderOptions from "../HeaderOptions";
import MenuBars from "../MenuBars";
import Navigation from "../Navigation";
import Logo from "../../assets/logo.jpg";
import "./styles.scss";
import HeaderGreeting from "../HeaderGreeting";

const Header = () => {
  return (
    <Fragment>
      <HeaderGreeting></HeaderGreeting>
      <header className="header">
        <MenuBars></MenuBars>
        <div className="logo">
          <Link to={HOME}>
            <img src={Logo} alt="eCommerce logo" />
          </Link>
        </div>
        <Navigation></Navigation>
        <HeaderOptions></HeaderOptions>
      </header>
    </Fragment>
  );
};

export default Header;
