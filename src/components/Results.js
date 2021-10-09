import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import Item from "./Item.js";
import Clipboard from "clipboard";
import "./Results.css";

function Results({ emojiFiltered = [] }) {
  useEffect(() => {
    const clipboard = new Clipboard(".item");
    return () => {
      clipboard.destroy();
    };
  });

  return (
    <div className="results">
      {emojiFiltered.length ? (
        emojiFiltered
          .slice(0, 100)
          .map((emoji, index) => (
            <Item id={index} key={index} symbol={emoji.symbol} keywords={emoji.keywords} />
          ))
      ) : (
        <p className="no-result">No Results Found</p>
      )}
    </div>
  );
}


Item.defaultProps = {
  emojiFiltered: []
};

Item.propTypes = {
  emojiFiltered: PropTypes.array
}

export default Results;
