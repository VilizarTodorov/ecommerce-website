import React from "react";
import "./styles.scss";

const Filter = (props) => {
  return (
    <div className="filter-sort-box">
      <ul className="filter-sort-box-option filter">
        <li className="option">
          <h3>filter by</h3>
          <i className="fas fa-angle-down"></i>
        </li>
      </ul>
      <ul className="filter-sort-box-option sort">
        <li className="option">
          <h3>sort by</h3>
          <i className="fas fa-angle-down"></i>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
