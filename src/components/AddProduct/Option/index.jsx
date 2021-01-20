import React from "react";
import "./styles.scss";

const Option = ({ value, content }) => {
  return (
    <option className="select-option" value={value}>
      {content}
    </option>
  );
};

export default Option;
