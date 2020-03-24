import React from 'react';

const GameResult = ({opponentName, tricode, isHomeGame, gameDate}) => {
    const date = new Date(gameDate);
    const date2 = date.toDateString();
    // console.log(date2);
    return (
        <div>
            {isHomeGame ? <div>@</div> : <div>vs</div>}
            <div>{opponentName}</div>
            <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${tricode}.svg`} />
            <div>{date2}</div>
        </div>
        
    );
}

export default GameResult;