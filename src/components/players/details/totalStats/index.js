import React from 'react';
import Table from '../../../_shared/table';
import Title from '../../../_shared/title';
import './index.module.scss';

const TotalStats = ({ totalStats }) => {
    return (
        <section>
            <Title title="stats"/>
            <Table array={totalStats}/>
        </section>
    );
}

export default TotalStats;