import React from 'react';
import classnames from 'classnames';

import styles from './table.module.scss';

const Table = ({ array, result, section }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          {array.map(({ title }) => {
            return <th key={title}>{title}</th>;
          })}
        </tr>
<<<<<<< HEAD
        <tr
          className={classnames(
            styles.table,
            section === 'totalStats' ? styles.totalStats : styles.games
          )}
        >
=======
        <tr className={classnames(styles.table, section === 'totalStats' ? styles.totalStats : styles.games)}>
>>>>>>> master
          {array.map(({ title, value }) => {
            const val = parseInt(value) === -1 ? <div className={styles.invalid}>-</div> : value;

            return (
              <td key={title}>
                {title === 'result' ? (
                  <>
<<<<<<< HEAD
                    <span className={result === 'W' ? styles.won : styles.lost}>
                      {result}
                    </span>
                    {value}
=======
                    <span className={result === 'W' ? styles.won : styles.lost}>{result}</span>
                    {val}
>>>>>>> master
                  </>
                ) : (
                  val
                )}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
