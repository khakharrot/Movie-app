import React, { useState } from 'react'
import ReactStars from "react-stars";


function Search({setSearchWord,setSearchRating}) {
  const ratingChanged = (newRating) => {
    setSearchRating(newRating);
  };

  return (
    <div className='search'>
    <input type="text" onChange={(e)=> setSearchWord (e.target.value)}/>
    <ReactStars
          count={5}
          size={24}
          color2={"#ffd700"}
          edit={true}
          onChange={ratingChanged}
        />
    </div>
  )
}

export default Search
