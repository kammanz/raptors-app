import React from 'react';
import Table from '../../../_shared/table';
import Title from '../../../_shared/title';
import styles from './index.module.scss';

const Stats = ({ stats }) => {
    return (
        <section className={styles.stats}>
            <Title title="stats"/>
            <Table obj={stats}/>
        </section>
    )
}

export default Stats;