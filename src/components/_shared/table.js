import React from 'react';

import Line from './line';

import styles from './table.module.scss';

const Table = ({ array, result }) => {

    // const values = arr.map(obj => {
    //     return obj.value
    // });

    console.log(array, 'array');

    // const arr = Object.entries(obj);

    const headerArray = array.map((obj, i) => {
        return <th key={i}>{obj.title}<Line /></th>;
    });

    const dataArray = array.map((obj, i) => {
        if(result && i === 0) {
            return (
                <td key={i}>
                    <span className={result === "W" ? 
                        styles.won : 
                        styles.lost}
                    >
                        {result}
                    </span> {obj.value}
                </td>
            );
        }

        return <td key={i}>{obj.value}</td>;
    });

    return (
        <table cellSpacing="0" cellPadding="0" className={styles.table}>
            <tbody>
                <tr>{headerArray}</tr>
                <tr>{dataArray}</tr>
            </tbody>
        </table>
    )
}

export default Table;