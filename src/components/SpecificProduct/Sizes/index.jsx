import React from "react";
import SpecificProductSize from "../SpecificProductSize";
import "./styles.scss";

const Sizes = ({ sizes, onChange, size, additionalKey }) => {
  return (
    <div className="sizes">
      <h2>select size</h2>
      <div className="sizes-grid">
        {sizes.map((x) => (
          <SpecificProductSize
            key={`${x}${additionalKey ? additionalKey : ""}`}
            id={`${x}${additionalKey ? additionalKey : ""}`}
            name={`size-size ${additionalKey ? additionalKey : ""}`}
            value={x}
            onChange={(event) => onChange(event.target.value)}
            label={x}
            currentValue={size}
          ></SpecificProductSize>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
