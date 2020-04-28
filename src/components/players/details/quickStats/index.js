import React from 'react';

import styles from './index.module.scss';

const QuickStats = ({ quickStats }) => {

    const cellArray = quickStats.map((stat, index) => {
        return (
            <div key={index} className={styles.container}>
                <div className={styles.header}>{stat.title}</div>
                <div className={styles.data}>{stat.object}</div>
            </div>
        );
    });

    return (
        <section className={styles.quickStats}>
            {cellArray}
        </section>
    )
}

export default QuickStats;