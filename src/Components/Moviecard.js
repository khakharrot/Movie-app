import React from 'react'
import ReactStars from "react-stars";
import {Routes, Route, Link } from "react-router-dom";


function Moviecard({el}) {
  return (
    <div className='card'> 
     <Link to={`/Trailer/${el.title}`}>
      <img src= {el.posterURL }/>
      </Link>
      <p>Movie title: {el.title}</p>
       <h3>Synopsis: {el.description} </h3>
       <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              value={el.rating}
              edit={false}
            />
             
    </div>
  )
}

export default Moviecard
