import React, { useState } from "react";
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
      <h4 className="nav-option-title">{props.optionTitle}</h4>
      <i onClick={setToTrue} className="fas fa-chevron-right fa-lg arrow-down"></i>
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
