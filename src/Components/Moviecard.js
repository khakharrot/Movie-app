import React from 'react'
import StarsRating from 'stars-rating'

function Moviecard({el}) {
  return (
    <div className='card'> 
      <img src= {el.posterURL }/>
      <p>Movie title: {el.title}</p>
       <h3>Synopsis: {el.description} </h3>
       <StarsRating
  count={5}
  value={el.rating}
  size={24}
  color2={'#ffd700'} 
  edit={false} />
    </div>
  )
}

export default Moviecard
