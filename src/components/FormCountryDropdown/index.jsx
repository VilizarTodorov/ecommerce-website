import React from "react";
import { CountryDropdown } from "react-country-region-selector";
import "./styles.scss";

const FormCountryDropdown = ({ value, onChange }) => {
  return (
    <div className="select-menu">
      <CountryDropdown onChange={onChange} value={value} valueType="short" required></CountryDropdown>
    </div>
  );
};

export default FormCountryDropdown;
