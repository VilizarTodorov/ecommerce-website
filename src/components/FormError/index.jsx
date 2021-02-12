import React from "react";
import "./styles.scss";

const FormError = ({ children }) => {
  return <div className="form-error">{children && children}</div>;
};

export default FormError;
