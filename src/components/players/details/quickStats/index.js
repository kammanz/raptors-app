import React from 'react';

import Line from '../../../_shared/line';
import Title from '../../../_shared/title';
import Table from '../../../_shared/table';

import styles from './index.module.scss';

const QuickStats = ({ quickStats }) => {
    console.log(quickStats, 'quickStats');

    const renderQuickStats = quickStats.map((stat, i) => {
        console.log(stat, 'quick stats map for single stat obj');
        return (
            <div key={i} className={styles.container}>
                <div className={styles.header}>{stat.title}</div>
                <div className={styles.data}>{stat.value}</div>
            </div>
        );
    });

    return (
        <section className={styles.quickStats}>
            {renderQuickStats}
        </section>
    );
}

export default QuickStats;