import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import './styles.scss'


const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to={ROUTES.HOME}>
        <h4>HOME</h4>
      </Link>
      <Link to={ROUTES.WOMEN}>
        <h4>WOMEN</h4>
      </Link>
      <Link to={ROUTES.MEN}>
        <h4>MEN</h4>
      </Link>
      <Link to={ROUTES.KIDS}>
        <h4>KIDS</h4>
      </Link>
    </nav>
  );
};

export default Navigation;
