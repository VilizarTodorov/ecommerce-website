import React from "react";
import Option from "../Option";

const products = {
  men: {
    shoes: ["sneakers", "running shoes", "sandals & slides", "soccer shoes", "basketball shoes", "football shoes"],
    clothing: ["sweatshirts & hoodies", "jackets", "pants", "shorts", "graphic t-shirts", "shirts & tops"],
    accessories: [
      "face covers",
      "bags & backpacks",
      "hats & beanies",
      "socks",
      "gloves",
      "watches",
      "phone cases",
      "water bottles",
    ],
  },
  women: {
    shoes: ["sneakers", "running shoes", "sandals & slides", "basketball shoes", "workout shoes", "hiking & outdoor"],
    clothing: ["sweatshirts & hoodies", "jackets", "sports bars", "shirts & tops", "pants", "leggings & tights"],
    accessories: [
      "face covers",
      "bags & backpacks",
      "hats & beanies",
      "socks",
      "gloves",
      "watches",
      "phone cases",
      "water bottles",
    ],
  },

  kids: {
    shoes: ["sneakers", "running shoes", "sandals & slides", "soccer shoes", "basketball shoes", "football shoes"],
    clothing: ["sweatshirts & hoodies", "jackets", "pants", "shorts", "graphic t-shirts", "shirts & tops"],
    accessories: [
      "face covers",
      "bags & backpacks",
      "hats & beanies",
      "socks",
      "gloves",
      "watches",
      "phone cases",
      "water bottles",
    ],
  },
};

const ProductTypes = ({ mainCategory, subCategory }) => {
  const items = products[mainCategory][subCategory];
  const options = items.map((x) => (
    <Option key={x} value={x}>
      {x}
    </Option>
  ));
  return options;
};

export default ProductTypes;
