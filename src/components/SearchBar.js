import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    backgroundColor: "#white",
    width: "800px",
    padding: "20px",
    borderRadius: "30px",
    color: "#6FAEA3",
    opacity: 0.7,
    fontSize: "18px",
    border: "none",
    
  };
  

  // .Button:hover {
  //   opacity: 0.9;
  // }

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
