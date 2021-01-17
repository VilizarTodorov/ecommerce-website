import React from "react";
import "./styles.scss";

const FormButton = ({ isFetching, buttonContent }) => {
  return (
    <button disabled={isFetching} className={`form-button ${isFetching ? "disabled" : ""}`}>
      {buttonContent}
      <i className="fas fa-arrow-right"></i>
    </button>
  );
};

export default FormButton;
