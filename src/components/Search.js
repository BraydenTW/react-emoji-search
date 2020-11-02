import './Search.css'

function Search(props) {
  const onChange = e => {
    props.onChange(e.target.value)
  }
  return (
    <input
      className="search"
      type="text"
      placeholder="Search for a keyword..."
      onChange={onChange}
    />
  )
}

export default Search
