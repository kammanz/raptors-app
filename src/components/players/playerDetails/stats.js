import React from 'react';

import Title from './title.js';

import styles from './stats.module.scss';

const Stats = (props) => {

    return (
        <div className={props.isQuickStats ? styles.quickStatContainer : styles.container}>
            {props.isQuickStats ? <Title title={props.title} /> : <div className={styles.title}>{props.title}</div>}
            <div className={styles.stat}>{props.stat}</div>
        </div>
    )
}

export default Stats;
