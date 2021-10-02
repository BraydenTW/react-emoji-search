import { useEffect } from "react";
import Item from "./Item.js";
import Clipboard from "clipboard";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as NoResultSVG } from "../assets/no-result.svg";
import "./Results.css";

function Results({ emojiFiltered }) {
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
          .map((emoji) => (
            <Item
              id={uuidv4()}
              symbol={emoji.symbol}
              title={emoji.title}
              keywords={emoji.keywords}
              key={uuidv4()}
            />
          ))
      ) : (
        <div className="no-result">
          <h3>No Results Found</h3>
          <NoResultSVG />
        </div>
      )}
    </div>
  );
}

export default Results;
