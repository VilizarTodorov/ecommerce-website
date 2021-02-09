import React, { Fragment } from "react";
import "./styles.scss";

const SpecificProductSize = ({ id, name, value, onChange, label, currentValue }) => {
  return (
    <Fragment>
      <input type="radio" id={id} name={name} value={value} onChange={onChange} checked={value === +currentValue} />
      <label htmlFor={id} className="size-radio-button">
        {label}
      </label>
    </Fragment>
  );
};

export default SpecificProductSize;
