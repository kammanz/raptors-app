import React from 'react';

import styles from './title.module.scss';

const Title = (props) => {
    return <div className={styles.title}>{props.title}</div>;
            // <div className={styles.stat}>{props.stat}</div>
}

export default Title;
