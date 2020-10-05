import React, {useState} from 'react'

function Item(props) {
  const [fadeIn, setFadeIn] = useState(false);
  const handleClick = e => {
    setFadeIn(true)
    setTimeout(() => setFadeIn(false), 900)
  }
  return (
    <div
      key={props.id}
      className="item"
      title="Copy Emoji to Clipboard 📋"
      onClick={handleClick}
      data-clipboard-text={props.symbol}
    >
      <div className={`item-copy ${fadeIn?'label-true':'label-false'}`}>
        Copied!
      </div>
      <span
        className="item-emoji"
      >
        {props.symbol}
      </span>
      <label className="item-name">
        {props.title}
      </label>
    </div>
  )
}

export default Item
