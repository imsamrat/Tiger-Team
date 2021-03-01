import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Player.css';
import Button from 'react-bootstrap/Button';
import '../Bootstrap/bootstrap.min.css';

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
            <Button variant="success" onClick={() => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Summery</Button>{' '}
        </div>
        </div>
        
    );
};

export default Player;