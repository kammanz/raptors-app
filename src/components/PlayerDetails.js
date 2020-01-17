import React from 'react';
import { connect } from 'react-redux';

const PlayerDetails = ({ player }) => {
    if (!player) {
        return <h3>Select a Player</h3>
    }

    return (
        <div>
            <h3>Player Stats</h3>            
            <div>Field Goal Percentage:{player.FG_PCT}</div>
            <div>Points: {player.PTS}</div>
            <div>Rebounds: {player.REB}</div>
        </div>        
    );
}

const getMyState = state => ({ player: state.selectPlayer });

export default connect(getMyState)(PlayerDetails);