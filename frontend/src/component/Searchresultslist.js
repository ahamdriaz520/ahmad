import React from 'react'
import SearchResults from './SearchResults'

const Searchresultslist = ({results}) => {
  return (
    <div className='results-list'>
       {
        results.map((result , id) =>{
            return(

                <SearchResults result={result} key={id}/>
            )
        })
       }
    </div>
  )
}

export default Searchresultslist