import React from "react";
import "./styles.scss";

const Select = ({ value, onChange, initialValue, children }) => {
  return (
    <select className="select-menu" value={value} onChange={onChange} required>
      <option hidden disabled value="">
        {initialValue}
      </option>
      {children}
    </select>
  );
};

export default Select;
