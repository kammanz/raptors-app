import React from 'react';
import { connect } from 'react-redux';

// import PlayerList from './PlayerList';

const PlayerStats = ({ player }) => {
    if (!player) {
        return <div>Select a Player</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>Player: {player.first_name}</p>
            <p>Points scored in game: {player.points}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { player: state.selectedPlayer };
}

export default connect(mapStateToProps)(PlayerStats);