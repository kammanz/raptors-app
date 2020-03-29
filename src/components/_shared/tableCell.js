import React from 'react';

// import Title from './title.js';

import styles from './tableCell.module.scss';
import Line from './line.js';

const TableCell = ({ title, stat, result }) => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <Line />
            {result ? 
                <div className={styles.stat}><span className={result === "W" ? styles.won : styles.lost}>{result}</span> {stat}</div> :
                <div className={styles.stat}>{stat}</div>
            }
        </div>
    )
}

export default TableCell;
