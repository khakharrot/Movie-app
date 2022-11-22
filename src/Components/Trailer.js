import React from 'react'
import { useParams } from 'react-router-dom';
import { list } from '../List';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Trailer() {
  const { titleMovies } = useParams()

  const [Movies, setMovies] = useState(list);
console.log (Movies.description)
  return (
    <div className='Trailer'>
      <h2>Trailer: {Movies.find((el) => el.title === titleMovies).description} </h2>
      <iframe width="420" height="315" title='Movie trailer'
src= {Movies.find((el) => el.title === titleMovies).trailer}>
  </iframe> 
  
   <button> <Link to="/"> Return to the front </Link> </button> 
    </div>
  )
}

export default Trailer
