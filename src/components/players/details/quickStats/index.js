import React from 'react';

import styles from './index.module.scss';

const QuickStats = ({ quickStats }) => {

    const renderQuickStats = quickStats.map((quickStat, index) => {
        return (
            <div key={index} className={styles.container}>
                <div className={styles.header}>{quickStat.title}</div>
                <div className={styles.data}>{quickStat.value}</div>
            </div>
        );
    });

    return (
        <section className={styles.quickStats}>
            {renderQuickStats}
        </section>
    )
}

export default QuickStats;