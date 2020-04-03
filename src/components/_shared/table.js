import React from 'react';

import Line from './line';

import styles from './table.module.scss';
import TableCell from './tableCell';


const Table = ({ obj }) => {
    const arr = Object.entries(obj);

    const header = arr.map((x, i) => {
        return <th key={i}>{x[0]}<Line /></th>;
    });

    const data = arr.map((x, i) => {
        return <td key={i}>{x[1]}</td>;
    });

    return (
        <table cellSpacing="0" cellPadding="0">
            <tbody>
                <tr>{header}</tr>
                <tr>{data}</tr>
            </tbody>
        </table>
    )
}

export default Table;