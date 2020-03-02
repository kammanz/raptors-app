import React from 'react';

import PlayersList from './PlayersList';
import PlayerDetails from './PlayerDetails';

const PlayersPage = () => {

    return (
        <div className="players-container">
            <PlayersList />
            <PlayerDetails />
        </div>
    )
}

export default PlayersPage;
