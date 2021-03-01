import logo from './logo.svg';
import './App.css';
import playerData from './FakeData/data.json';
import { useEffect, useState } from 'react';
import Player from './Components/Player/Player';
import Summery from './Components/Summery/Summery';

function App() {
  const[players, setPlayers] = useState([]);
  const [summery, setSummery] = useState([]);
  useEffect(() => {
    setPlayers(playerData);
    // console.log(playerData);
  },[])

  const handleAddPlayer = (player) =>{
    const newSummery = [...summery, player];
    setSummery(newSummery);
  } 

  return (
    <div className="App">
      <h1>Total Player: {players.length}</h1>
      <h2>Total Added Player: {summery.length}</h2>
      <Summery summery={summery}></Summery>
      <ul>
        {
          players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
