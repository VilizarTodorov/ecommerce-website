import React from "react";
import "./styles.scss";

const FormButton = ({ buttonContent }) => {
  return (
    <button className="form-button">
      {buttonContent}
      <i className="fas fa-arrow-right"></i>
    </button>
  );
};

export default FormButton;
