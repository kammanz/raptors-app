import React from 'react';

import styles from './title.module.scss';

const Title = (props) => {
    return <div className={styles.title}>{props.title}</div>;
}

export default Title;
