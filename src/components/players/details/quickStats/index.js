import React from 'react';

import styles from './index.module.scss';

const QuickStats = ({ quickStats, teamColor }) => {
    return (
        <section className={styles.quickStats}>
            {quickStats.map(({title, value}) => {
                return (
                    <div key={title} className={styles.container}>
                        <div style={{ backgroundColor: `${teamColor}`}} className={styles.header}>{title}</div>
                        <div className={styles.data}>{value}</div>
                    </div>
                );
            })}
        </section>
    );
};

export default QuickStats;