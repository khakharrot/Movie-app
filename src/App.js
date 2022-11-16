import './App.css';
import React from "react";
import { useState } from 'react';
import Movielist from './Components/Movielist'; 
import Newmovie from './Components/Newmovie';
import Search from './Components/Search';
import {Routes, Route, Link } from "react-router-dom";
import Trailer from './Components/Trailer.js'; 
import { BrowserRouter } from 'react-router-dom';


function App() {

  const [Movies,setMovies] = useState ([
    {posterURL: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg' , title:'Deadpool', description:"A love story", rating: 5,trailer:'https://www.youtube.com/embed/ONHBaC-pfsk'} ,
    {posterURL: 'https://images.moviesanywhere.com/45bc0ec075bfc0b4d8f184a7cc5bf993/876ed805-83b1-4387-b0d0-62d08c36536d.jpg' , title:'The Lord of the Rings: The Return of the King', description:"A war story", rating: 5,trailer:'https://www.youtube.com/embed/r5X-hFf6Bwo'} ,
    {posterURL: 'https://m.media-amazon.com/images/M/MV5BOTgwMmU0YzktOGNhNi00MDcyLTg1OGEtZGQwM2RlMTAyYzhlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg' , title:'Jackass The Movie', description:"A funny story", rating: 4,trailer:'https://www.youtube.com/embed/KwFZkLucUb0'},
    {posterURL: 'https://fr.web.img2.acsta.net/pictures/22/07/13/11/36/3514892.jpg' , title:'Bullet Train', description:"An assassin story", rating: 4.5, trailer:'https://www.youtube.com/embed/0IOsk2Vlc4o'},
    {posterURL: 'https://m.media-amazon.com/images/M/MV5BMjIyMzQ0MjExNV5BMl5BanBnXkFtZTcwMzkyMzgxMw@@._V1_FMjpg_UX1000_.jpg' , title:'Get Him to the Greek', description:"A rock story", rating: 3,trailer:'https://www.youtube.com/embed/Nadp60OP4D4'},
    {posterURL: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg' , title:'John Wick', description:"A revenge story", rating: 4, trailer:'https://www.youtube.com/embed/C0BMx-qxsP4' }
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

     <Routes >
         <Route path="/Trailer" element={<Trailer/>} />
     </Routes>
    </div>
  );
}

export default App;
