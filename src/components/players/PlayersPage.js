import React from 'react';

import PlayersList from './PlayersList';
import PlayerDetails from './PlayerDetails';

import styles from './playersPage.module.scss';

const PlayersPage = () => {

    return (
        <div className={styles.playersContainer}>
            <PlayersList />
            <PlayerDetails />
        </div>
    )
}

export default PlayersPage;
