import React from 'react';
import { connect } from 'react-redux';

const PlayerStats = ({player}) => {
    console.log(player);

    if (!player) {
        return <h3>Select a Player</h3>
    }

    return (
        <div>
            <h3>Player Stats</h3>
            
            <div>Feild Goal Percentage:{player.FG_PCT}</div>
            <div>Points: {player.PTS}</div>
            <div>Rebounds: {player.REB}</div>
        </div>        
    );
}

const getMyState = (state) => {
    return { player: state.selectPlayer };
}

export default connect(getMyState)(PlayerStats);