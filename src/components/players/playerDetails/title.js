import React from 'react';

import styles from './title.module.scss';

const Title = ({title}) => {

    if (title === "stats") {
        return <div className={`${styles.title} ${styles.stats}`}>{title}</div>
    } 
    
    if (title === "recent games") {
        return <div className={`${styles.title} ${styles.recentGames}`}>{title}</div>
    }

    return <div className={styles.title}>{title}</div>
    // return <div className={props.title === "stats" ? `${styles.title} ${styles.stats}`: `${styles.title}`}>{props.title}</div>;
}

export default Title;
