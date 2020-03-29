import React from 'react';

import styles from './title.module.scss';

const Title = ({title}) => {
    return <div className={styles.title}>{title}</div>;
}   

export default Title;
