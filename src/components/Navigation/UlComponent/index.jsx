import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setMainToFalse } from "../../../Redux/NavSlice/nav-slice";
import NavHeader from "../NavHeading";
import "./styles.scss";

const UlComponent = (props) => {
  const [subSubNavToggle, setSubSubNavToggle] = useState(false);
  const dispatch = useDispatch();

  const setSubSubNavToTrue = () => {
    setSubSubNavToggle(true);
  };

  const setSubSubNavToFalse = () => {
    setSubSubNavToggle(false);
  };

  const items = props.items.map((item) => {
    const productTypeRoutePart = item.replace(/\s+/g, "-");
    return (
      <li onClick={() => dispatch(setMainToFalse())} key={item} className="shop-item-category">
        <Link to={`${props.mainRoutePart}${props.subRoutePart}/${productTypeRoutePart}`}>{item}</Link>
      </li>
    );
  });

  return (
    <li className="ul-component">
      <div onClick={setSubSubNavToTrue} className="container">
        <h3 className="category-title">
          <Link to={`${props.mainRoutePart}${props.subRoutePart}`}>{props.listTitle}</Link>
        </h3>
        <i className="fas fa-chevron-right fa-lg arrow-down"></i>
      </div>
      <ul className={`sub-dropdown ${subSubNavToggle ? "active" : ""}`}>
        <NavHeader title={props.listTitle} hideNav={setSubSubNavToFalse}></NavHeader>
        {items}
      </ul>
    </li>
  );
};

export default UlComponent;
