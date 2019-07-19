import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import Cards from "./components/Cards";

const App = () => {
  const [characters, setCharacters] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(()=> {
    axios.get('https://swapi.co/api/people')
    .then(response => {
      console.log(response.data.results);
      
      setCharacters(response.data.results);
      
    })
  }, []);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {characters.map((el, index)=> {return <Cards key={index} char={el}/>})}
    </div>
  );
}

export default App;
