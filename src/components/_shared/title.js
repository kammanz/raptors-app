import React from 'react';

import styles from './title.module.scss';

<<<<<<< HEAD
const Title = ({ title }) => {
    return <div className={styles.title}>{title}</div>;
=======
const Title = ({ title, section }) => {

    return <div className={section === "games" ? styles.gameStats : styles.totalStats}>{title}</div>;
>>>>>>> RAP-37__Player-details-recent-games
}   

export default Title;
