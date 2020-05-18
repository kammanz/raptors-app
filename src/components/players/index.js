import React from 'react';

import List from './list';
import Details from './details';
import Filters from './filters';

import styles from './index.module.scss';

const PlayersPage = () => {
    return (
        <div className={styles.container}>
            <Filters />
            <div className={styles.gallery}>
                <List />
                <Details />  
            </div>
        </div>
    );
};

export default PlayersPage;
