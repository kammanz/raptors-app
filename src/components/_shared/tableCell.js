import React from 'react';

import Line from './line';
import Title from './title';

import styles from './tableCell.module.scss';

const TableCell = ({ value }) => {
    return (
        <div className={styles.container}>
            <Title />
            <Line />
            <div>{value}</div>
        </div>
    );
}

export default TableCell;
