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
      <div className="player">
        {
          players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
        }
      </div>
    </div>
  );
}

export default App;
