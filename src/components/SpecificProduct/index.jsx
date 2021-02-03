import React from "react";
import { useParams } from "react-router-dom";

const SpecificProduct = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>specific product</h2>
    </div>
  );
};

export default SpecificProduct;
