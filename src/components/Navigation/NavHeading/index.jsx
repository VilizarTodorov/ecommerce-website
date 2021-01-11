import React from "react";
import "./styles.scss";

const NavHeader = (props) => {
  return (
    <div className="nav-heading">
      <span className="nav-heading-title">{props.title}</span>
      <i onClick={props.hideNav} className="fas fa-times fa-lg exit"></i>
    </div>
  );
};

export default NavHeader;
