import React from 'react';
import Table from '../../../_shared/table';
import Title from '../../../_shared/title';
import styles from './index.module.scss';

const Stats = ({ stats }) => {

    console.log(stats, ' stats, in stats/index.js');

    return (
        <section className={styles.stats}>
            <Title title="stats"/>
            <Table arr={stats}/>
        </section>
    )
}

export default Stats;