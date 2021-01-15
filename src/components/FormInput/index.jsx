import React from "react";
import './styles.scss'

const FormInput = ({ type, id, name, value, onChange }) => {
  return (
    <div className="form-input">
      <input className='input-field' type={type} name={name} id={id} value={value} onChange={onChange} />
      <label className="input-label" htmlFor={id}>
        {name}<span className='required'>*</span>
      </label>
    </div>
  );
};

export default FormInput;
