import React from 'react'

const SearchResults = ({result}) => {
  return (
    <div className='search-result' onClick={(e)=> alert(`You Select on ${result.name}`)}>{result.name}</div>
  )
}

export default SearchResults