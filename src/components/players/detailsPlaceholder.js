import React from 'react';

import styles from './detailsPlaceholder.module.scss';

const DetailsPlaceholder = () => {
    return (
        <div className={styles.container}>
            <div className={styles.placeholderImage} />
            <div className={styles.underline} />
            <div className={styles.box}>
                <div className={styles.textBox}>
                    <div className={styles.barOne} />
                    <div className={styles.barTwo} /> 
                    <div className={styles.barThree} />
                </div>
                <div className={styles.circleBox}>
                    <div className={styles.circle} />
                </div>
            </div>
        </div>
    );
}

export default DetailsPlaceholder;