import './App.css';
import React from "react";
import Movielist from './Components/Movielist'; 
import Newmovie from './Components/Newmovie';
import Search from './Components/Search';
import {Routes, Route } from "react-router-dom";
import Trailer from './Components/Trailer.js'; 
import { useState } from 'react';
import { list } from './List';

function App() {

 
const [SearchWord,setSearchWord]= useState ("")
const [SearchRating,setSearchRating]= useState (1)

const [Movies, setMovies] = useState(list);


  return (
    <div className='App'>
      <Search setSearchWord= {setSearchWord} setSearchRating={setSearchRating} />
     <h1>List of Movies</h1>
     <Newmovie Movies={Movies} setMovies={setMovies} />
     <Routes >
          <Route index element= {<Movielist Movies={Movies} SearchWord={SearchWord} SearchRating={SearchRating} />}/>
         <Route path="/Trailer/:titleMovies" element= {<Trailer />} />
     </Routes>
    </div>
  );
}

export default App;
