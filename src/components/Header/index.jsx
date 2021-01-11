import React from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";
import HeaderOptions from "../HeaderOptions";
import MenuBars from "../MenuBars";
import Navigation from "../Navigation";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <MenuBars></MenuBars>
      <div className="logo">
        <Link to={HOME}>eCommerce</Link>
      </div>
      <Navigation></Navigation>
      <HeaderOptions></HeaderOptions>
    </header>
  );
};

export default Header;
