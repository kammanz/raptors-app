import React from 'react';

import styles from './allStats.module.scss';

const AllStats = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.stat}>{props.stat}</div>
        </div>
    )
}

export default AllStats;