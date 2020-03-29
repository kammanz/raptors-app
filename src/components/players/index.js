import React from 'react';

import PlayersList from './list';
import Details from './details';

import styles from './index.module.scss';

const PlayersPage = () => {

    return (
        <div className={styles.playersContainer}>
            <PlayersList />
            <Details />
        </div>
    )
}

export default PlayersPage;
