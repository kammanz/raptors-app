import React from 'react';

import List from './list';
import Details from './details';

import styles from './index.module.scss';

const PlayersPage = () => {

    return (
        <div className={styles.playersContainer}>
            <List />
            <Details />
        </div>
    );
};

export default PlayersPage;
