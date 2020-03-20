import React from 'react';
import { connect } from 'react-redux';

import Placeholder from './placeholder.js';
import Stats from './stats';
import Title from './title';


import styles from './playerDetails.module.scss';

const PlayerDetails = ({ player }) => {
    if (!player) {
        return (
            <div className={styles.container}>
                <Placeholder />
            </div>
        );
    }

    console.log(player);

    const {
      person_id,
      first_name,
      last_name,
      position_full,
      jersey_number,
      height_ft,
      height_in,
      weight_lbs,
    } = player;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${person_id}.png`} alt="Player Headshot" />
                </div>

                <div className={styles.imageBorderBottom}></div>
                <div className={styles.statsContainer}>
                    <div className={styles.nameContainer}>
                        <div className={styles.name}>{first_name} {last_name}</div>
                        <div className={styles.jerseyNumber}>{jersey_number}</div>
                    </div>
                    <div className={styles.position}>{position_full}</div>
                    <div className={styles.details}>{height_ft}-{height_in}, {weight_lbs} lbs</div>
                </div>
                <div className={styles.mainStatsContainer}>
                    <Stats isQuickStats={true} title="Ppg" stat={player.ppg} />
                    <Stats isQuickStats={true} title="Rpg" stat={player.rpg} />
                    <Stats isQuickStats={true} title="Ast" stat={player.assists} />
                    <Stats isQuickStats={true} title="FG%" stat={player.fgp} />
                </div>
                <Title title="Stats" />
                <div className={styles.mainStatsContainer}>
                    <Stats isQuickStats={false} title="GP" stat={player.gamesPlayed} />
                    <Stats isQuickStats={false} title="Min" stat={player.min} />
                    <Stats isQuickStats={false} title="Fg%" stat={player.fgp} />
                    <Stats isQuickStats={false} title="3P%" stat={player.tpp} />
                    <Stats isQuickStats={false} title="Ft%" stat={player.ftp} />
                    <Stats isQuickStats={false} title="Rpg" stat={player.rpg} />
                    <Stats isQuickStats={false} title="Ast" stat={player.assists} />
                    <Stats isQuickStats={false} title="Blk" stat={player.blocks} />
                    <Stats isQuickStats={false} title="Stl" stat={player.steals} />
                    <Stats isQuickStats={false} title="Pf" stat={player.pFouls} />
                    <Stats isQuickStats={false} title="To" stat={player.turnovers} />
                    <Stats isQuickStats={false} title="Pts" stat={player.points} />
                </div>
            </div>  
        </div>
    )
}

const mapStateToProps = state => ({ player: state.player });

export default connect(mapStateToProps)(PlayerDetails);
