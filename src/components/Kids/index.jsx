import React from "react";
import ComponentMainCategory from "../ComponentMainCategory";
import img from "../../assets/kids.jpg";
import { KIDS } from "../../constants/categories";

const Kids = () => {
  return <ComponentMainCategory category={KIDS} img={img}></ComponentMainCategory>;
};

export default Kids;
