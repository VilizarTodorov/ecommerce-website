import React from "react";
import ComponentMainCategory from "../ComponentMainCategory";
import img from "../../assets/women.jpg";
import { WOMEN } from "../../constants/categories";

const Women = () => {
  return <ComponentMainCategory category={WOMEN} img={img}></ComponentMainCategory>;
};

export default Women;
