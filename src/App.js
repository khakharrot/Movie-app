import './App.css';
import React from "react";
import { useState } from 'react';
import Movielist from './Components/Movielist'; 
import Newmovie from './Components/Newmovie';
import Search from './Components/Search';

function App() {

  const [Movies,setMovies] = useState ([
    {id:1 ,posterURL: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg' , title:'Deadpool', description:"A love story", rating: 5} ,
    {id:1 ,posterURL: 'https://images.moviesanywhere.com/45bc0ec075bfc0b4d8f184a7cc5bf993/876ed805-83b1-4387-b0d0-62d08c36536d.jpg' , title:'The Lord of the Rings: The Return of the King', description:"A war story", rating: 5} ,
    {id:3 ,posterURL: 'https://m.media-amazon.com/images/M/MV5BOTgwMmU0YzktOGNhNi00MDcyLTg1OGEtZGQwM2RlMTAyYzhlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg' , title:'Jackass The Movie', description:"A funny story", rating: 4}
])

const FragTitle = () => {Movies.title.split("")};
const [SearchWord,setSearchWord]= useState ("")
const [SearchRating,setSearchRating]= useState (1)

const addMovie = (x) => {
  setMovies ([...Movies, x ])}

  return (
    <div className='App'>
      <Search setSearchWord= {setSearchWord} setSearchRating={setSearchRating} />
     <h1>List of Movies</h1>
     <Movielist Movies={Movies} SearchWord={SearchWord} SearchRating={SearchRating} />
     <Newmovie addMovie={addMovie}  />
    </div>
  );
}

export default App;
