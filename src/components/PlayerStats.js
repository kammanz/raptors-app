import React from 'react';
import { connect } from 'react-redux';

const PlayerStats = (props) => {
    return (
        <div>
            <h3>The player's stats</h3>
            <div>{props.player.PLAYER_NAME}</div>
        </div>
        
    );
}

const getMyState = (state) => {
    return { player: state.selectPlayer };
}

export default connect(getMyState)(PlayerStats);