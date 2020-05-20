import React from 'react';

import classnames from 'classnames';

import styles from './table.module.scss';

const Table = ({ array, result, section }) => {
    return (
        <table className={styles.table}>
            <tbody>
                <tr>
                    {array.map(({title}) => {
                        return <th key={title}>{title}</th>;
                    })}
                </tr>
                <tr className={classnames(styles.table, section === 'totalStats' ? styles.totalStats : styles.games)}>
                    {array.map(({ title, value }) => {
                        return (
                            <td key={title}>
                                {title === 'result' ?
                                    <>
                                        <span className={result === 'W' ? styles.won : styles.lost}>
                                            {result}
                                        </span>
                                        {value}
                                    </> :
                                    value
                                }
                            </td>
                        );
                    })}
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
