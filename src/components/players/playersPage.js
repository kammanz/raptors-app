import React from 'react';

import PlayersList from './playersList';
import PlayerDetails from './playerDetails';

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
