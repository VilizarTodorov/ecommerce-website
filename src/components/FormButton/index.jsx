import React from "react";
import "./styles.scss";

const FormButton = ({ isFetching, children }) => {
  return (
    <button disabled={isFetching} className={`form-button ${isFetching ? "disabled" : ""}`}>
      {children}
      <i className="fas fa-arrow-right"></i>
    </button>
  );
};

export default FormButton;
