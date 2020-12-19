import React from "react";
import "./FilterMenu.css";

function FilterMenu() {
  return (
    <div className="dropdown">
      <span>Sort by...</span>
      <div className="dropdown-menu">
        <a href="LINK HOLDER">price low to high</a>
        <a href="LINK HOLDER">price high to low</a>
        <a href="LINK HOLDER">distance by zipcode</a>
      </div>
    </div>
  );
}

export default FilterMenu;
