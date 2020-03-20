import React from 'react';
import { connect } from 'react-redux';

import Placeholder from './placeholder.js';
import MainStats from './mainStats';
import AllStats from './allStats';

import styles from './playerDetails.module.scss';

const PlayerDetails = ({ player }) => {
    if (!player) {
        return (
            <div className={styles.container}>
                <Placeholder />
            </div>
        );
    }

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
            <div className={styles.playerDetailsCard}>
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
                    <MainStats title="Ppg" stat={player.ppg} />
                    <MainStats title="Reb" stat={player.totReb} />
                    <MainStats title="Ast" stat={player.assists} />
                    <MainStats title="FG %" stat={player.fgp} />
                </div>
                <div className={styles.title}>Stats</div>
                <div className={styles.mainStatsContainer}>
                    <AllStats title="GP" stat={player.gamesPlayed} />
                    <AllStats title="Min" stat={player.min} />
                    <AllStats title="Fg%" stat={player.gamesPlayed} />
                    <AllStats title="3P%" stat={player.gamesPlayed} />
                    <AllStats title="Ft%" stat={player.fgp} />
                    <AllStats title="Reb" stat={player.totReb} />
                    <AllStats title="Ast" stat={player.assists} />
                    <AllStats title="Blk" stat={player.blocks} />
                    <AllStats title="Stl" stat={player.steals} />
                    <AllStats title="Pf" stat={player.pFouls} />
                    <AllStats title="To" stat={player.turnovers} />
                    <AllStats title="Pts" stat={player.points} />
                </div>
                
            </div>  
        </div>
    )
}

const mapStateToProps = state => ({ player: state.player });

export default connect(mapStateToProps)(PlayerDetails);
