import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from '@emotion/core';

import styles from './index.module.scss';

const QuickStats = ({ quickStats, teamColor, isLoading }) => {
  const override = css`
    display: flex;
    align-items: center;
    height: 48px;
  `;

  return (
      <section className={styles.quickStats}>
          {quickStats.map(({title, value}) => {
              return (
                  <div key={title} className={styles.container}>
                      <div style={{ backgroundColor: teamColor }} className={styles.header}>{title}</div>
                      {isLoading ?
                        <ScaleLoader
                          css={override}
                          height={8}
                          width={3}
                          radius={2}
                          margin={2}
                          color={'lightgrey'}
                          loading={isLoading}
                        /> :
                        <div className={styles.data}>{value}</div>
                      }
                  </div>
              );
          })}
      </section>
  );
};

export default QuickStats;
