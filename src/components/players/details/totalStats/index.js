import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from '@emotion/core';

import Table from '../../../_shared/table';
import Title from '../../../_shared/title';

import styles from './index.module.scss';

const TotalStats = ({ totalStats, teamColor, isLoading }) => {
  const override = css`
    display: flex;
    align-items: center;
    height: 43px;
  `;

  return (
      <section className={styles.totalStats}>
          <Title title='stats' totalStats teamColor={teamColor} />
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
            <Table array={totalStats} section='totalStats' teamColor={teamColor} isLoading={isLoading} />
          }
      </section>
  );
};

export default TotalStats;
