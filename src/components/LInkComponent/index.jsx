import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const LinkComponent = ({ to, linkContent }) => {
  return (
    <Link className="link-component" to={to}>
      {linkContent}
      <i className="fas fa-arrow-right"></i>
    </Link>
  );
};

export default LinkComponent;
