import React from 'react';

import styles from './mainStat.module.scss';

const MainStat = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.stat}>{props.stat}</div>
        </div>
    );
}

export default MainStat;