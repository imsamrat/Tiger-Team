import React from 'react';

const Summery = (props) => {
    const summery = props.summery;
    const totalBudget =  summery.reduce( (sum, player) => sum + player.salary, 0);
    return (
        <div>
            <h2>This is Summery: {summery.length}</h2>
            <h2>Total Budget: {totalBudget}</h2>
        </div>
    );
};

export default Summery;