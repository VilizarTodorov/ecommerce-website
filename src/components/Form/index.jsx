import React from "react";
import "./styles.scss";

const Form = ({ children, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
