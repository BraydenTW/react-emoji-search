import React, { useState, useEffect } from 'react'
import Header from './Header.js'
import Search from './Search.js'
import Results from './Results.js'

import data from './data.json'

function Container() {
  const [emojiData, setEmojiData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setEmojiData(data);
  }, [])
  const onChange = val => {
    setSearch(val);
  }
  return (
    <div className="container">
      <Header />
      <Search onChange={onChange} />
      <Results emojiFiltered={search === "" ? emojiData : emojiData.filter(item => item.keywords.includes(search))} />
    </div>
  )
}

export default Container