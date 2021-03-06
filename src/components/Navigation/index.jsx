import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainToFalse } from "../../Redux/NavSlice/nav-slice";
import NavHeader from "./NavHeading";
import NavOption from "./NavOption";
import { MEN, WOMEN, KIDS } from "../../constants/routes";
import * as categories from "../../constants/categories";
import "./styles.scss";
import { mainNavSelector } from "../../helpers/selectors";

const menShoes = [
  "sneakers",
  "running shoes",
  "sandals & slides",
  "soccer shoes",
  "basketball shoes",
  "football shoes",
];

const womenShoes = [
  "sneakers",
  "running shoes",
  "sandals & slides",
  "basketball shoes",
  "workout shoes",
  "hiking & outdoor",
];

const menClothing = ["sweatshirts & hoodies", "jackets", "pants", "shorts", "graphic t-shirts", "shirts & tops"];

const womenClothing = [
  "sweatshirts & hoodies",
  "jackets",
  "sports bars",
  "shirts & tops",
  "pants",
  "leggings & tights",
];

const accessories = [
  "face covers",
  "bags & backpacks",
  "hats & beanies",
  "socks",
  "gloves",
  "watches",
  "phone cases",
  "water bottles",
];

const Navigation = () => {
  const navState = useSelector(mainNavSelector);
  const dispatch = useDispatch();

  const hideNav = () => {
    dispatch(setMainToFalse());
  };

  return (
    <nav className={`navigation ${navState ? "active" : ""}`}>
      <NavHeader title="eCommerce" hideNav={hideNav}></NavHeader>
      <ul className="options">
        <NavOption
          routePart={MEN}
          optionTitle={categories.MEN}
          clothing={menClothing}
          shoes={menShoes}
          accessories={accessories}
        ></NavOption>

        <NavOption
          routePart={WOMEN}
          optionTitle={categories.WOMEN}
          clothing={womenClothing}
          shoes={womenShoes}
          accessories={accessories}
        ></NavOption>

        <NavOption
          routePart={KIDS}
          optionTitle={categories.KIDS}
          clothing={menClothing}
          shoes={menShoes}
          accessories={accessories}
        ></NavOption>
      </ul>
    </nav>
  );
};

export default Navigation;
