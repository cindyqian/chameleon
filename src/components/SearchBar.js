import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    backgroundColor: "#FFAF6D",
    width: "800px",
    height: "60px"
    borderRadius: "30px",
    color: "white",
    fontSize: "18px",
    border: "none",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search photographers or occasion..."}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
