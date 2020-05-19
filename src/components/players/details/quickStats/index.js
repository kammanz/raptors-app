import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

import styles from './index.module.scss';

const QuickStats = ({ quickStats, teamColor, isLoading }) => {
    return (
        <section className={styles.quickStats}>
            {quickStats.map(({title, value}) => {
                return (
                    <div key={title} className={styles.container}>
                        <div style={{ backgroundColor: `${teamColor}`}} className={styles.header}>{title}</div>
                        {isLoading ?
                          <ClipLoader
                            size={20}
                            color={teamColor}
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
