//import logo from './logo.svg';
import './index.css';
import './App.css';
import imagenRickMorty from "./img/rick-morty.png";
import imagenmifoto from "./img/mifoto.jpg";
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

  <div>
 <img src={imagenmifoto} alt="mifoto" className="img-home"/>
  </div>

}

export default App;