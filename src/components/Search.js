import React from "react";
import PropTypes from 'prop-types';
import "./Search.css";

function Search(props) {
  const onChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <input
      className="search"
      type="text"
      placeholder="Search for a keyword..."
      onChange={onChange}
    />
  );
}


Search.propTypes = {
      onChange: PropTypes.func
}

export default Search;
