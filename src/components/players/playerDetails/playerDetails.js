import React from 'react';
import { connect } from 'react-redux';

import Placeholder from './placeholder.js';
import Stats from '../../../common/tableCell';
import Games from './games.js';
import Title from '../../../common/title';

import styles from './playerDetails.module.scss';

const PlayerDetails = ({ player, teams, games }) => {
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
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${person_id}.png`} alt="Player Headshot" />
                </div>
                <div className={styles.imageBorderBottom}></div>
                <div className={styles.detailsContainer}>
                    <div className={styles.nameContainer}>
                        <div className={styles.name}>{first_name} {last_name}</div>
                        <div className={styles.jerseyNumber}>{jersey_number}</div>
                    </div>
                    <div className={styles.position}>{position_full}</div>
                    <div className={styles.details}>{height_ft}-{height_in}, {weight_lbs} lbs</div>
                </div>
                <div className={styles.statsContainer}>
                    <Stats isQuickStats title="ppg" stat={player.ppg} />
                    <Stats isQuickStats title="rpg" stat={player.rpg} />
                    <Stats isQuickStats title="ast" stat={player.assists} />
                    <Stats isQuickStats title="fg%" stat={player.fgp} />
                </div>
                <Title title="stats" />
                <div className={styles.statsContainer}>
                    <Stats stats title="gp" stat={player.gamesPlayed} />
                    <Stats title="min" stat={player.min} />
                    <Stats title="fg%" stat={player.fgp} />
                    <Stats title="3p%" stat={player.tpp} />
                    <Stats title="ft%" stat={player.ftp} />
                    <Stats title="rpg" stat={player.rpg} />
                    <Stats title="ast" stat={player.assists} />
                    <Stats title="blk" stat={player.blocks} />
                    <Stats title="stl" stat={player.steals} />
                    <Stats title="pf" stat={player.pFouls} />
                    <Stats title="to" stat={player.turnovers} />
                    <Stats title="pts" stat={player.points} />
                </div>
                <Title title="recent games" />
                <div className={styles}>
                    <Games teams={teams} games={games} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ player: state.player, teams: state.teams, games: state.games });

export default connect(mapStateToProps)(PlayerDetails);
