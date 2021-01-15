import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const LinkComponent = ({ to, linkContent }) => {
  return (
    <div className="link-component">
      <Link to={to}>
        {linkContent}
        <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default LinkComponent;
