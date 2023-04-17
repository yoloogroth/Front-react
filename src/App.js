//import logo from './logo.svg';
import './index.css';
import './App.css';
import imagenRickMorty from "./img/rick-morty.png";
import imagenmifoto from "./img/mifoto.jpeg";
import { useState } from 'react';
import Characters from './components/Characters';


function App() {
  const [characters, setCharacters]=useState(null);
  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }
  return (
    <div className="App">
       <div class="character-container1">
            <div>
           <img src={imagenmifoto} alt="Yolotzin" className="img-home1"/>
           </div>
           <div >
           <center >
            <h1>Yolotzin Groth Hernandez</h1>
           <p>zS20020311</p>
           <p>Software engineering student & photographer</p>
           <p>Yolo051@outlook.es</p> <p>IG:@groth.yolo</p>
           </center>
           </div>
           </div>
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>
        {characters? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ):(
          <>
          
           <img src={imagenRickMorty} alt="Rick & Morty" className="img-home"/>
           <button onClick={reqApi} className="btn-search">
           Buscar personajes
           </button>
          
          </>

        )
        }
      </header>
    </div>
    
  );

 

}

export default App;