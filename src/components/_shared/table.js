import React from 'react';

import Line from './line';

import styles from './table.module.scss';

const Table = ({ array, result }) => {

    const header = array.map((obj, index) => {
        return <th key={index}>{obj.title}<Line /></th>;
    });

    const data = array.map((obj, index) => {
        if(result && index === 0) {
            return (
                <td key={index}>
                    <span className={result === "W" ? 
                        styles.won : 
                        styles.lost}
                    >
                        {result}
                    </span> {obj.value}
                </td>
            );
        }

        return <td key={index}>{obj.value}</td>;
    });

    return (
        <table cellSpacing="0" cellPadding="0" className={styles.table}>
            <tbody>
                <tr>{header}</tr>
                <tr>{data}</tr>
            </tbody>
        </table>
    );
}

export default Table;