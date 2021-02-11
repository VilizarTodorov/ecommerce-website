import React from "react";
import { Fragment } from "react";
import "./styles.scss";

const FormInput = ({ type, id, name, value, onChange, label, isInvalid, onBlur }) => {
  return (
    <Fragment>
      <div className="form-input">
        <input
          className={`input-field ${value ? "active" : ""}`}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          // required
        />
        <label className="input-label" htmlFor={id}>
          {label}
          <span className="required">*</span>
        </label>
        <div className={`is-input-valid ${isInvalid === "initial" ? "" : isInvalid ? "invalid" : "valid"}`}></div>
      </div>
      {isInvalid !== "initial" && isInvalid && <div className="error-message">{isInvalid}</div>}
    </Fragment>
  );
};

export default FormInput;
