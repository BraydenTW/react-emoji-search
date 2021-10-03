import React, { useEffect } from "react";
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
            <Item id={index} symbol={emoji.symbol} keywords={emoji.keywords} />
          ))
      ) : (
        <p className="no-result">No Results Found</p>
      )}
    </div>
  );
}

export default Results;
