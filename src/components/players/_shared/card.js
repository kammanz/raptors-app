import React from 'react';

import styles from './card.module.scss';
const Card = ({ player }) => {

    const {
        person_id,
        first_name,
        last_name,
        jersey_number,   
        position_full,   
        height_ft,      
        height_in,       
        weight_lbs,
    } = player;

    console.log(player);

    return (
        // <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${person_id}.png`} alt="Player Headshot" />
                </div>
                <div className={styles.imageLine}></div>
                <div className={styles.detailsContainer}>
                    <div className={styles.nameContainer}>
                        <div className={styles.name}>{first_name} {last_name}</div>
                        <div className={styles.jerseyNumber}>{jersey_number}</div>
                    </div>
                    <div className={styles.position}>{position_full}</div>
                    <div className={styles.details}>{height_ft}-{height_in}, {weight_lbs} lbs</div>
                </div>
            </div>
        // </div>
    );
};

export default Card;
