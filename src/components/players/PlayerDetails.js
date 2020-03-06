import React from 'react';
import { connect } from 'react-redux';

import styles from './playerDetails.module.scss';

const PlayerDetails = ({ player }) => {
    if (!player) {
        return <div className={styles.playerDetailsContainer} />;
    }

    const { playerId, playerFirstName, playerLastName,  points, ppg, blocks, steals, playerPosition, playerJerseyNumber } = player;

    return (
        <div className={styles.playerDetailsContainer}>
            <div className={styles.playerDetailsCard}>
                <div className={styles.imageContainer}>
                    <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${playerId}.png`} alt="Player Headshot"/>  
                </div>
                    
                <div className={styles.imageBorderBottom}></div>
                <div className={styles.statsContainer}>
                    <div className={styles.statsNameContainer}>
                        <div className={styles.statsName}>{playerFirstName} {playerLastName}</div>
                        <div className={styles.statsNumber}>{playerJerseyNumber}</div>
                    </div>
                    <div className={styles.statsPosition}>{playerPosition}</div>
                </div>
            </div>  
        </div>
    )
}

const mapStateToProps = state => ({ player: state.selectPlayer });

export default connect(mapStateToProps)(PlayerDetails);