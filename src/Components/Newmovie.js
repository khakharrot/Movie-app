import React from 'react'
import Modal from 'react-modal';
import { useState } from 'react';


function Newmovie({addMovie}) {

    const [modalIsOpen, setIsOpen]= useState(false);
    const [newtitle, setnewtitle] = useState("");
    const [newposter, setnewposter] = useState("");
    const [synopsis, setsynopsis] = useState("");
    const [rate, setrate] = useState(""); 



    const handleClose = () => setIsOpen(false);
    const handleShow = () => setIsOpen(true);
    
    const newMovie =()=> {
    addMovie ({
        id : Math.random(),
        posterURL : newposter,
        title: newtitle,
        description:synopsis,
        rating : rate,
    },    setIsOpen(false))
}

  return (
    <div>
        <button onClick={handleShow }>Add new movie</button> 
        <Modal className='Modal' isOpen={modalIsOpen} onRequestClose= {handleShow}  >
        <h2>Add a new movie to the list:</h2>
        <h3>Movie name:</h3>  <input type="text" onChange={(e)=> setnewtitle(e.target.value) } />
        <h3>Movie poster:(add an URL)</h3>  <input type="text" onChange={(e)=> setnewposter(e.target.value)} />
        <h3>Movie synopsis:</h3>  <input type="text" onChange={(e)=> setsynopsis(e.target.value)}  />
        <h3>Movie rating/5:</h3>  <input type="text" onChange={(e)=> setrate(e.target.value)} />
        <button onClick={newMovie}> Save new movie </button>
        <button onClick={handleClose}> Close </button>
        </Modal>
    </div>
  )
}

export default Newmovie
