import React, { useState } from "react";
import "./Item.css";

function Item({ id, symbol, keywords }) {
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = (e) => {
    setFadeIn(true);
    setTimeout(() => setFadeIn(false), 900);
  };

  return (
    <div
      key={id}
      className="item"
      title="Copy Emoji to Clipboard 📋"
      onClick={handleClick}
      data-clipboard-text={symbol}
      data-keywords={keywords}
    >
      <div className={`item-copy ${fadeIn ? "label-true" : "label-false"}`}>
        Copied!
      </div>
      <span className="item-emoji">{symbol}</span>
    </div>
  );
}

export default Item;
