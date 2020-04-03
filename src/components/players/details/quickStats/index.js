import React from 'react';

import Line from '../../../_shared/line';
import Title from '../../../_shared/title';
import Table from '../../../_shared/table';

import styles from './index.module.scss';

const QuickStats = ({ obj }) => {
    const arr = Object.entries(obj);
    console.log();

    const cell = arr.map((x, i) => {
        return (
            <div key={i} className={styles.container}>
                <div className={styles.header}>{x[0]}</div>
                <div className={styles.data}>{x[1]}</div>
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