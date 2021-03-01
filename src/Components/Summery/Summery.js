import React from 'react';

const Summery = (props) => {
    const summery = props.summery;
    const totalExpense =  summery.reduce( (sum, player) => sum + player.salary, 0);
    let name = [];
    for (let i = 0; i < summery.length; i++) {
        const cricketPlayer = summery[i];
        const  playerName = cricketPlayer.name;
        const playerSalary = cricketPlayer.salary;
        name = name + playerName + "( "+ playerSalary +" Taka)" + ", ";
    }
    return (
        <div>
            <ul>
                <p> <h2>Selected Player: </h2> {name}</p>
            </ul>
            <h2>Total Expense: {totalExpense} Taka</h2>
            <p></p>
        </div>
    );
};

export default Summery;