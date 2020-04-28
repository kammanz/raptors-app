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

    // console.log(player);
    // console.log(player.min);
    // console.log(player.recentGames, 'rec games');

    // const newbie = player.recentGames.map(game => game);
    // console.log(newbie);

    const quickStats = [
        { title: 'ppg', value: player.ppg }, 
        { title: 'reb', value: player.totReb }, 
        { title: 'ast', value: player.assists }, 
        { title: 'fg %', value: player.fgp }, 
    ];

    const stats = [ 
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

    // console.log(player.recentGames, 'here');

    const recentGamesObject = player.recentGames;
    // console.log(recentGamesObject, 'recentGamesObject');
    // console.log(games, 'games');
    // const recentGamesArray = Object.entries(recentGamesObject);
    // console.log(recentGamesArray);
    // const recentGamesArray = Object.values(recentGamesObject);
    // console.log(recentGamesArray);

    
    // console.log(recentGamesArray, 'recent games array');

    // const gameStats = [
    //     { title: 'result', value: },
    //     { title: 'points', value: },
    //     { title: 'assists', value: },
    //     { title: 'off reb', value: },
    //     { title: 'def reb', value: },
    //     { title: 'tot reb', value: },
    // ];

    return (
        <div className={styles.container}>
            <Card player={player} />
            <QuickStats quickStats={quickStats} />
            <Stats stats={stats} />
            <Games teams={teams} games={games} />
        </div>
    );
}

const mapStateToProps = state => ({ player: state.player, teams: state.teams, games: state.games });

export default connect(mapStateToProps)(Details);
