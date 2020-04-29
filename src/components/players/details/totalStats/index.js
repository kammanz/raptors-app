import React from 'react';
import Table from '../../../_shared/table';
import Title from '../../../_shared/title';
import styles from './index.module.scss';

const TotalStats = ({ totalStats }) => {
    return (
        <section className={styles.totalStats}>
            <Title title="stats" totalStats />
            <Table array={totalStats} section="totalStats" />
        </section>
    );
}

export default TotalStats;