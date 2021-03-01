import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Player.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Bootstrap/bootstrap.min.css';

const Player = (props) => {
    const { name, salary, image } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div>
            <div className="d-flex justify-content-center">
                <Card Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={image}/>
                        <Card.Body>
                            <Card.Title>Name: {name}</Card.Title>
                            <Card.Text>Salary: {salary}</Card.Text>
                            <Button variant="success" onClick={() => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</Button>{' '}
                        </Card.Body>
                </Card> 
            </div>
        </div>

    );
};

export default Player;