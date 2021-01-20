import React from "react";
import "./styles.scss";

const GeneralButton = ({ onClick, children }) => {
  return (
    <button className="general-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default GeneralButton;
