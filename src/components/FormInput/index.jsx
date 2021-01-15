import React from "react";
import "./styles.scss";

const FormInput = ({ type, id, name, value, onChange, label }) => {
  return (
    <div className="form-input">
      <input
        className={`input-field ${value ? "active" : ""}`}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
      <label className="input-label" htmlFor={id}>
        {label}
        <span className="required">*</span>
      </label>
    </div>
  );
};

export default FormInput;
