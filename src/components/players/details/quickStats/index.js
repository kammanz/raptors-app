import React from 'react';

import styles from './index.module.scss';

const QuickStats = ({ quickStats }) => {
    const quickStatsArray = Object.entries(quickStats);

    const cell = quickStatsArray.map((quickStat, i) => {
        return (
            <div key={i} className={styles.container}>
                <div className={styles.header}>{quickStat[0]}</div>
                <div className={styles.data}>{quickStat[1]}</div>
            </div>
        );
    });

    return (
        <section className={styles.quickStats}>
            {cell}
        </section>
    )
}

export default QuickStats;