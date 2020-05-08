import React from 'react';

import styles from './title.module.scss';

const Title = ({ title, section }) => {

    return <div className={section === "games" ? styles.gameStats : styles.totalStats}>{title}</div>;
}   

export default Title;
