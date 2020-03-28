import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import generator from "./utils/wordsearch-generator"
import arraysEqual from "./utils/arraysEqual"
import arrayIncluded from "./utils/arrayIncluded";

function App() {
  const [puzzle, setPuzzle] = useState([[]])
  const [activeTiles, setActiveTiles] = useState([])
  const [wordList, setWordList] = useState(["WORLD", "HELLO"])
  const [solved, setSolved] = useState([])
  useEffect(_ => {
    setPuzzle(generator(wordList,6, 6,2))

  },[])

  useEffect(_ => {
    let sortedSelection = activeTiles.map(item => puzzle[item[0]][item[1]]).sort()
    for (let i = 0; i < wordList.length; i++) {
      if (arraysEqual(wordList[i].split("").sort(), sortedSelection)) {
        console.log("match")
        setWordList(wordList.filter(item => item !== wordList[i]))
        setSolved([...solved, ...activeTiles])
        setActiveTiles([])
        return
      }
    }
  },[activeTiles])


  const toggleTile = (row, col) => {
    console.log("toggling", row, col)
    if (wordList.length === 0) return
    
    if (!arrayIncluded(activeTiles, [row,col])) {
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
          className={arrayIncluded(activeTiles, [row,col]) 
          ? "tile activetile" 
          : arrayIncluded(solved, [row,col])  
            ? "tile solvedtile"  
            : "tile"}>
            {tile}
        </div>)}
      </div>)}

      {wordList.length > 0 ? null : <h1>You win!</h1>}
    </div>
  );
}

export default App;
