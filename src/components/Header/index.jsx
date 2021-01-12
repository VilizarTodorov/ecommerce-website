import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";
import HeaderOptions from "../HeaderOptions";
import MenuBars from "../MenuBars";
import Navigation from "../Navigation";
import Logo from "../../assets/logo.jpg";
import "./styles.scss";

const Header = () => {
  return (
    <Fragment>
      <p className='greeting-sign'>
        <Link to={'/sign-in'}>
          Sign in
        </Link>
      </p>
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
