import React from 'react';
import { connect } from 'react-redux';

const PlayerStats = (props) => {
    console.log('props in player stats', props);
    return (
        <div>
            <h3>The player's stats</h3>
            <div>{props.player.PLAYER_NAME}</div>
        </div>
        
    );
}

const getMyState = (state) => {
    console.log(state, 'state in player stats');
    return { player: state.selectPlayer };
}

export default connect(getMyState)(PlayerStats);