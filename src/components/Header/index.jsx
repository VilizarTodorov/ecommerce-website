import React from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";
import HeaderOptions from "../HeaderOptions";
import Navigation from "../Navigation";
import './styles.scss'

const Header = () => {
  return (
    <header className="header">
      <Link to={HOME}>
        <h4 className="logo">eCommerce</h4>
      </Link>
      <Navigation></Navigation>
      <HeaderOptions></HeaderOptions>
    </header>
  );
};

export default Header;
