import React from "react";
import ComponentMainCategory from "../ComponentMainCategory";
import men from "../../assets/men.jpg";
import { MEN } from "../../constants/categories";

const Men = () => {
  return <ComponentMainCategory category={MEN} img={men}></ComponentMainCategory>;
};

export default Men;
