import React from 'react';

import Line from './line';

import styles from './table.module.scss';

const Table = ({ obj, result }) => {
    // console.log('stats', stats);
    const arr = Object.entries(obj);

    const header = arr.map((x, i) => {
        return <th key={i}>{x[0]}<Line /></th>;
    });

    const data = arr.map((x, i) => {
        if(result && i === 0) {
            return <td key={i}><span className={result === "W" ? styles.won : styles.lost}>{result}</span> {x[1]}</td>;
        }

        return <td key={i}>{x[1]}</td>;
    });

    return (
        <table cellSpacing="0" cellPadding="0" className={styles.table}>
            <tbody>
                <tr>{header}</tr>
                <tr>{data}</tr>
            </tbody>
        </table>
    )
}

export default Table;