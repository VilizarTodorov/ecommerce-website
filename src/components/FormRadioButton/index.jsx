import React from "react";
import "./styles.scss";

const FormRadioButton = ({ id, name, value, onChange, label, currentValue }) => {
  return (
    <label htmlFor={id} className="radio-button-container">
      {label}
      <input type="radio" id={id} name={name} value={value} onChange={onChange} checked={value === currentValue} />
      <span className="checkmark"></span>
    </label>
  );
};

export default FormRadioButton;
