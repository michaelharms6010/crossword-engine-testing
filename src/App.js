import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import generator from "./utils/wordsearch-generator"
import arraysEqual from "./utils/arraysEqual"

function App() {
  const [puzzle, setPuzzle] = useState([[]])
  const [activeTiles, setActiveTiles] = useState([])
  useEffect(_ => {
    setPuzzle(generator(["WORLD", "HELLO"],6, 6))

  },[])

  const toggleTile = (row, col) => {
    console.log("toggling", row, col)
    
    if (activeTiles.filter(item => arraysEqual(item, [row,col])).length === 0){
      setActiveTiles([...activeTiles, [row,col]])
    } else {
      setActiveTiles(activeTiles.filter(item => !arraysEqual(item,[row, col])))
    }
  }

  return (
    <div className="App">
      {puzzle.map((item, row) => 
      <div className="row">
        {item.map((tile, col) => 
        <div onClick={_ => toggleTile(row,col)} 
          className={activeTiles.filter(item => arraysEqual(item, [row,col])).length > 0 ? "tile activetile" : "tile"}>{tile}
        </div>)}
      </div>)}
    </div>
  );
}

export default App;
