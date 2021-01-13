import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavHeader from "../NavHeading";
import UlComponent from "../UlComponent";
import "./styles.scss";

const NavOption = (props) => {
  const [subNavToggle, setSubNavToggle] = useState(false);

  const setToFalse = () => {
    setSubNavToggle(false);
  };

  const setToTrue = () => {
    setSubNavToggle(true);
  };

  return (
    <li className="nav-option">
      <div className="container" onClick={setToTrue}>
        <h3 className="nav-option-title">
          <Link to={props.routePart}>{props.optionTitle}</Link>
        </h3>
        <i className="fas fa-chevron-right fa-lg arrow-down"></i>
      </div>
      <ul className={`dropdown-menu ${subNavToggle ? "active" : ""}`}>
        <NavHeader title={props.optionTitle} hideNav={setToFalse}></NavHeader>
        <UlComponent listTitle="shoes" items={props.shoes}></UlComponent>
        <UlComponent listTitle="clothing" items={props.clothing}></UlComponent>
        <UlComponent listTitle="accessories" items={props.accessories}></UlComponent>
      </ul>
    </li>
  );
};

export default NavOption;
