import React from 'react';
import Table from '../../../_shared/table';
import Title from '../../../_shared/title';
import styles from './index.module.scss';

const TotalStats = ({ totalStats }) => {

    // console.log(stats, 'stats');
    return (
        <section className={styles.stats}>
            <Title title="stats"/>
            <Table array={totalStats}/>
        </section>
    )
}

export default TotalStats;