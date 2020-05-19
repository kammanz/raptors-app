import React from 'react';

import placeholderImg from '../../../../assets/imgs/placeholder.png';

import styles from './index.module.scss';

const Card = ({ player, playerTeamId }) => {
    const {
        person_id,
        first_name,
        last_name,
        jersey_number,
        position_full,
        height_ft,
        height_in,
        weight_lbs,
        teamColor,
    } = player;

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${playerTeamId}/2019/260x190/${person_id}.png`} alt='player headshot'
                    onError={e => e.target.src = placeholderImg}
                />
            </div>
            <div style={{ borderColor: teamColor }} className={styles.imageLine} />
            <div className={styles.detailsContainer}>
                <div className={styles.nameContainer}>
                    <div className={styles.name}>{first_name} {last_name}</div>
                    <div style={{ color: teamColor }} className={styles.jerseyNumber}>{jersey_number}</div>
                </div>
                <div className={styles.position}>{position_full}</div>
                <div className={styles.details}>{height_ft}-{height_in}, {weight_lbs} lbs</div>
            </div>
        </div>
    );
};

export default Card;