import React from 'react';
import { connect } from 'react-redux';

import Placeholder from './card/placeholder.js';
import Card from '../_shared/card';
import QuickStats from './quickStats/';
import RecentGamesStats from './recentGamesStats/index.js';
import TotalStats from './totalStats';

import styles from './index.module.scss';

const Details = ({ player, teams, games }) => {
    if (!player) {
        return (
            <div className={styles.container}>
                <Placeholder />
            </div>
        );
    }

    const quickStats = [
        { title: 'ppg', value: player.ppg }, 
        { title: 'reb', value: player.totReb }, 
        { title: 'ast', value: player.assists }, 
        { title: 'fg %', value: player.fgp }, 
    ];

    const totalStats = [ 
       { title: 'gp', value: player.gamesPlayed }, 
       { title: 'min', value: player.min }, 
       { title: 'fg%', value: player.fgp }, 
       { title: '3p%', value: player.tpp },
       { title: 'ft%', value: player.ftp },
       { title: 'rpg', value: player.rpg },
       { title: 'ast', value: player.assists },
       { title: 'blk', value: player.blocks },
       { title: 'stl', value: player.steals },
       { title: 'pf', value: player.pFouls },
       { title: 'to', value: player.turnovers },
       { title: 'pts', value: player.points },
    ];

    return (
        <div className={styles.container}>
            <Card player={player} />
            <QuickStats quickStats={quickStats} />
            <TotalStats totalStats={totalStats} />
            <RecentGamesStats teams={teams} recentGamesStats={games} />
        </div>
    );
}

const mapStateToProps = state => ({ player: state.player, teams: state.teams, games: state.games });

export default connect(mapStateToProps)(Details);
