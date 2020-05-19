import React, { useRef } from 'react';
import { connect } from 'react-redux';

import Placeholder from './placeholder/placeholder.js';
import Card from './card';
import QuickStats from './quickStats';
import RecentGamesStats from './recentGamesStats';
import TotalStats from './totalStats';

import styles from './index.module.scss';

const Details = ({ player, teams, selectedTeam, games, isLoading }) => {
    const ref = useRef();

    if (!player) {
        return (
            <div className={styles.container}>
                <Placeholder />
            </div>
        );
    };

    if (ref.current) {
        ref.current.scrollTo(0,0);
    };

    const {
        assists,
        blocks,
        fgp,
        ftp,
        gamesPlayed,
        min,
        pFouls,
        ppg,
        points,
        totReb,
        rpg,
        steals,
        tpp,
        turnovers,
        teamColor,
    } = player;

    const quickStats = [
        { title: 'ppg', value: ppg },
        { title: 'reb', value: totReb },
        { title: 'ast', value: assists },
        { title: 'fg %', value: fgp },
    ];

    const totalStats = [
       { title: 'gp', value: gamesPlayed },
       { title: 'min', value: min },
       { title: 'fg%', value: fgp },
       { title: '3p%', value: tpp },
       { title: 'ft%', value: ftp },
       { title: 'rpg', value: rpg },
       { title: 'ast', value: assists },
       { title: 'blk', value: blocks },
       { title: 'stl', value: steals },
       { title: 'pf', value: pFouls },
       { title: 'to', value: turnovers },
       { title: 'pts', value: points },
    ];

    console.log(isLoading);

    return (
        <div ref={ref} className={styles.container}>
            {isLoading && <div className={styles.overlay}>It is Loading...</div>}
            <Card player={player} playerTeamId={selectedTeam.teamId} />
            <QuickStats teamColor={teamColor} quickStats={quickStats} />
            <TotalStats teamColor={teamColor} totalStats={totalStats} />
            <RecentGamesStats teams={teams} teamColor={teamColor} recentGamesStats={games} />
        </div>
    );
};

const mapStateToProps = state => ({
    player: state.player,
    teams: state.teams,
    selectedTeam: state.selectedTeam,
    games: state.games,
    isLoading: state.isLoading,
});

export default connect(mapStateToProps)(Details);
