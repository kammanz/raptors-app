import React from 'react';
import { connect } from 'react-redux';


import Placeholder from './card/placeholder.js';
import Card from '../_shared/card';
import QuickStats from './quickStats/';
import Games from './games/index.js';
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

    const quickStats = {
        ppg: player.ppg, 
        reb: player.totReb, 
        ast: player.assists, 
        "fg %": player.fgp, 
    }

    const stats = { 
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
            <Card player={player} />
            <QuickStats quickStats={quickStats}/>
            <Stats stats={stats} />
            <Games teams={teams} games={games} />
        </div>
    )
}

const mapStateToProps = state => ({ player: state.player, teams: state.teams, games: state.games });

export default connect(mapStateToProps)(Details);
