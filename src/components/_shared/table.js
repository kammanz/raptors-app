import React from 'react';
import PropTypes from 'prop-types';
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
        <tr className={classnames(styles.table, section === 'totalStats' ? styles.totalStats : styles.games)}>
          {array.map(({ title, value }) => {
            const val = parseInt(value) === -1 ? <div className={styles.invalid}>-</div> : value;

            return (
              <td key={title}>
                {title === 'result' ? (
                  <>
                    <span className={result === 'W' ? styles.won : styles.lost}>{result}</span>
                    {val}
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

Table.propTypes = {
  array: PropTypes.array,
  result: PropTypes.string,
  section: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
};

export default Table;
