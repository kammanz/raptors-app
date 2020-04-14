import React from 'react';

import Line from './line';

import styles from './table.module.scss';

const Table = ({ obj, result }) => {
    const arr = Object.entries(obj);

    const header = arr.map((item, i) => {
        return <th key={i}>{item[0]}<Line /></th>;
    });

    const data = arr.map((item, i) => {
        if(result && i === 0) {
            return (
                <td key={i}>
                    <span className={result === "W" ? 
                        styles.won : 
                        styles.lost}
                    >
                        {result}
                    </span> {item[1]}
                </td>
            );
        }

        return <td key={i}>{item[1]}</td>;
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