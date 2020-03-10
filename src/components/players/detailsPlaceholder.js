import React from 'react';

import styles from './detailsPlaceholder.module.scss';

const DetailsPlaceholder = () => {
    return (
        <div className={styles.playerDetailsContainer}>
            <div className={styles.picture}/>
            <div className={styles.underline}/>
            <div className={styles.box}>
            <div>
                <div className={styles.text1}/>
                <div className={styles.text2}/> 
            </div>
            <div className={styles.circle}/>
            </div>
            <div className={styles.text3}/>
        </div>
    );
}

export default DetailsPlaceholder;