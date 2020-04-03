import React from 'react';
import Table from '../../../_shared/table';
import Title from '../../../_shared/title';
import Line from '../../../_shared/line';
import styles from './index.module.scss';

const Stats = ({ obj }) => {
    return (
        <section>
            <Title title="stats"/>
            {/* <Line /> */}
            <Table obj={obj}/>
        </section>
    )
}

export default Stats;