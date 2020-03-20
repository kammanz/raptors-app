import React from 'react';

import styles from './stats.module.scss';

const Stats = (props) => {
    return (
        <div className={props.isQuickStats ? styles.quickStatContainer : styles.container}>
            <div className={props.isQuickStats ? styles.quickStatTitle : styles.title}>{props.title}</div>
            <div className={props.isQuickStats ? styles.quickStat : styles.stat}>{props.stat}</div>
        </div>
    )
}

export default Stats;