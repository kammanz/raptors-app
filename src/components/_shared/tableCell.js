import React from 'react';

import Line from './line.js';

// import Title from './title.js';

import styles from './tableCell.module.scss';

const TableCell = ({ title, value }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            {/* <Line /> */}
            <div className={styles.line}></div>
            <div>{value}</div>
        </div>
    )
}

export default TableCell;
