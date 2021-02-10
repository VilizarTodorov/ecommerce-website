import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "../AddProduct/Select";
import { setParameters } from "../../Redux/OrderBySlice";
import Option from "../AddProduct/Option";
import "./styles.scss";

const Filter = (props) => {
  const [orderBy, setOrderBy] = useState("");
  const dispatch = useDispatch();
  const onChange = (event) => {
    dispatch(setParameters(event.target.value));
    setOrderBy(event.target.value);
  };
  return (
    <div className="filter-sort-box">
      <Select value={orderBy} onChange={onChange} initialValue="order by">
        <Option value="price desc">price (high-low)</Option>
        <Option value="price asc">price (low-high)</Option>
        <Option value="name asc">A-Z</Option>
        <Option value="name desc">Z-A</Option>
      </Select>
    </div>
  );
};

export default Filter;
