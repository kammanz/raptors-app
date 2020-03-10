import React from 'react';

import PlayersList from './playersList-temp';
import PlayerDetails from './playerDetails-temp';

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
