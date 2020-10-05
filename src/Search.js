import React from 'react'

function Search(props) {
  // const [ search, setSearch ] = useState("");
  const onChange = e => {
    // setSearch(e.target.value)
    props.onChange(e.target.value)
  }
  return (
    <input
      className="search"
      type="text"
      // value={search}
      placeholder="Search for a keyword..."
      onChange={onChange}
    />
  )
}

export default Search
