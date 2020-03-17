import React from 'react';

import styles from './mainStats.module.scss';

const MainStats = (props) => {
    console.log(props);
    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.stat}>{props.stat}</div>
        </div>
    );
}

export default MainStats;