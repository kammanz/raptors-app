import React from 'react';

import Title from './title.js';

import styles from './stats.module.scss';

const Stats = (props) => {
    const { isQuickStats, title, stat } = props;

    return (
        <div className={isQuickStats ? styles.quickStatContainer : styles.container}>
            {isQuickStats ? <Title title={title} /> : <div className={styles.title}>{title}</div>}
            <div className={styles.stat}>{stat}</div>
        </div>
    )
}

export default Stats;
