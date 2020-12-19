import React from 'react';

const SearchBar = ({keyword, setKeyword}) => {
    const BarStyling = {backgroundColor:"#FF7E14", width:"800px", padding:"20px", borderRadius:"30px"};
    return (
        <input
            style={BarStyling}
            key="random1"
            value={keyword}
            placeholder={"Search photographers or occasion..."}
            onChange={(e) => setKeyword(e.target.value)}
        />
    );
}

export default SearchBar;