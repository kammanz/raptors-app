import React, { useRef } from 'react';
import { connect } from 'react-redux';

import Placeholder from './placeholder/placeholder.js';
import Card from './card';
import QuickStats from './quickStats';
import RecentGamesStats from './recentGamesStats';
import TotalStats from './totalStats';

import styles from './index.module.scss';

const Details = ({
    player: {
      details,
      isLoading,
    },
    teams,
    selectedTeam,
  }) => {
    const ref = useRef();

    if (!details.person_id) {
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
      recentGames,
    } = details;

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

    return (
        <div ref={ref} className={styles.container}>
            <Card player={details} playerTeamId={selectedTeam.teamId} />
            <QuickStats teamColor={teamColor} quickStats={quickStats} isLoading={isLoading} />
            <TotalStats teamColor={teamColor} totalStats={totalStats} isLoading={isLoading} />
            <RecentGamesStats teams={teams} teamColor={teamColor} recentGamesStats={recentGames} isLoading={isLoading} />
        </div>
    );
};

const mapStateToProps = state => ({
    player: state.player,
    teams: state.teams,
    selectedTeam: state.selectedTeam,
});

export default connect(mapStateToProps)(Details);
