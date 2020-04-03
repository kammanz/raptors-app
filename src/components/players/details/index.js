import React from 'react';
import { connect } from 'react-redux';

import Placeholder from './card/placeholder.js';

import QuickStats from './quickStats/';
import TableCell from '../../_shared/tableCell';
import Games from './games/index.js';
import Title from '../../_shared/title';
import Stats from './stats';

import styles from './index.module.scss';


const Details = ({ player, teams, games }) => {
    if (!player) {
        return (
            <div className={styles.container}>
                <Placeholder />
            </div>
        );
    }

    // console.log(teams, 'here');

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

    // const fg = 'fg %';
    const quickStatsObj = {
        ppg: player.ppg, 
        reb: player.totReb, 
        ast: player.assists, 
        "fg %": player.fgp, 
    }

    const statsObj = { 
        gp: player.gamesPlayed, 
        min: player.min, 
        "fg%": player.fgp, 
        "3p%": player.tpp,
        "ft%": player.ftp,
        rpg: player.rpg,
        ast: player.assists,
        blk: player.blocks,
        stl: player.steals,
        pf: player.pFouls,
        to: player.turnovers,
        pts: player.points
    };

    return (
        <div className={styles.container}>
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
                <QuickStats obj={quickStatsObj}/>
                <Stats obj={statsObj} />
                <Games teams={teams} games={games} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ player: state.player, teams: state.teams, games: state.games });

export default connect(mapStateToProps)(Details);
