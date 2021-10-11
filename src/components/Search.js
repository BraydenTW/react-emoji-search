import React from "react";
import PropTypes from 'prop-types';
import "./Search.css";
const delay = 400;
function Search(props) {
  const debounce = (func, interval) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, interval);
    };
  };
  const onChange = debounce((e) => {
    props.onChange(e.target.value);
  }, delay);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search for a keyword..."
      onChange={onChange}
    />
  );
}

Search.defaultValue = {
  onChange: () => { }
}

Search.propTypes = {
  onChange: PropTypes.func
}

export default Search;
