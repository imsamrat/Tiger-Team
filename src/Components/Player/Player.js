import React from 'react';
import './Player.css';

const Player = (props) => { 
    const {name, salary, image} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className = "player">
            <div>
            <img className ="player-image" src={image} alt=""/>
        </div>

        <div className = "player-info">
            <h2>Name : {name}</h2>
            <h3>Salary: {salary}</h3>
            <button className="main-btn" onClick={() => handleAddPlayer(props.player)}>Add Me</button>   
        </div>
        </div>
        
    );
};

export default Player;