import React from "react";
import "./styles.scss";

const Option = ({ value, children }) => {
  return (
    <option className="select-option" value={value}>
      {children}
    </option>
  );
};

export default Option;
