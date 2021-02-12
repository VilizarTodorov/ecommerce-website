import React from "react";
import { INITIAL } from "../../constants/strings";
import "./styles.scss";

const FormInput = ({ type, id, name, value, onChange, isInvalid, onBlur, label }) => {
  return (
    <div className="form-input-wrapper">
      <div className="form-input">
        <input
          className={`input-field ${value ? "active" : ""}`}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
        />
        <label className="input-label" htmlFor={id}>
          {label}
          <span className="required">*</span>
        </label>
        <span className={`is-input-valid-icon ${isInvalid === INITIAL ? "" : isInvalid ? "invalid" : "valid"}`}>
          {isInvalid !== INITIAL && isInvalid && <i className="fas fa-times fa-lg"></i>}
          {isInvalid !== INITIAL && !isInvalid && <i className="fas fa-check fa-lg"></i>}
        </span>
        <div className={`is-input-valid ${isInvalid === INITIAL ? "" : isInvalid ? "invalid" : "valid"}`}></div>
      </div>
      {isInvalid !== INITIAL && isInvalid && <div className="error-message">{isInvalid}</div>}
    </div>
  );
};

export default FormInput;
