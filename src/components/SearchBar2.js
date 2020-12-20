import React from "react";
import "./SearchBar2.css";

const SearchBar2 = ({handleFilter}) => {
  return (
    <input className = 'search-bar'placeholder="Search for photographers or by occasion..." onChange={(e) => handleFilter(e.target.value)}/>
  );
};

export default SearchBar2;