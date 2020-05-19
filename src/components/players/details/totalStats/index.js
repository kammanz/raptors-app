import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

import Table from '../../../_shared/table';
import Title from '../../../_shared/title';

import styles from './index.module.scss';

const TotalStats = ({ totalStats, teamColor, isLoading }) => {
    return (
        <section className={styles.totalStats}>
            <Title title='stats' totalStats teamColor={teamColor} />
            {isLoading ?
              <ClipLoader
                size={20}
                color={teamColor}
                loading={isLoading}
              /> :
              <Table array={totalStats} section='totalStats' />
            }
        </section>
    );
};

export default TotalStats;
