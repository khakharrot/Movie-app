import React from 'react'
import Moviecard from './Moviecard'


function Movielist({Movies,SearchWord,SearchRating}) {
  return (
    <div className='list'>
        {Movies.filter( (el)=> el.title.toLowerCase().includes(SearchWord.toLowerCase().trim() && el.rating >= SearchRating)
        ).map((el)=>( <Moviecard el={el}/>))}
    </div>
  )
}

export default Movielist
