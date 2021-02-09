import React from "react";
import SpecificProductSize from "../SpecificProductSize";
import "./styles.scss";

const Sizes = ({ sizes, onChange, size }) => {
  return (
    <div className="sizes">
      <h2>select size</h2>
      <div className="sizes-grid">
        {sizes.map((x) => (
          <SpecificProductSize
            key={`${x}${x}`}
            id={`${x}${x}`}
            name="size-size"
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
