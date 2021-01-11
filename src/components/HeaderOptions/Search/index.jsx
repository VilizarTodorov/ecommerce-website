import React from "react";
import './styles.scss'

const Search = () => {
  return (
    <div className="option search-container">
      <input className='search-input' type="text" />
      <i className="fas fa-search fa-lg"></i>
    </div>
  );
};

export default Search;
