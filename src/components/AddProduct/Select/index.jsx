import React from "react";
import "./styles.scss";

const Select = ({ value, onChange, children }) => {
  return (
    <select className="select-menu" value={value} onChange={onChange} required>
      <option hidden disabled value="">
        Category
      </option>
      {children}
    </select>
  );
};

export default Select;
