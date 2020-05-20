import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from '@emotion/core';

import Title from '../../../_shared/title';
import Table from '../../../_shared/table';

import styles from './index.module.scss';

const RecentGamesStats = ({ teams, teamColor, recentGamesStats, isLoading }) => {
  const recentGamesArray = Object.values(recentGamesStats);
  const teamsArray = Object.values(teams);

  const recentGames = recentGamesArray.map(({
    gameId,
    isHomeGame,
    hTeam,
    vTeam,
    gameDateUTC,
    stats,
    }) => {
      const { points, assists, offReb, defReb, totReb } = stats;

      const getGameResult = () => {
        const playersTeam = isHomeGame ? hTeam : vTeam;
        return playersTeam.isWinner ? 'W' : 'L';
      };

      const oppTeam = teamsArray.find(team => {
        const oppTeamId = isHomeGame ? vTeam.teamId : hTeam.teamId;
        return team.teamId === oppTeamId;
      });

      const score = parseInt(hTeam.score) > parseInt(vTeam.score) ?
        `${hTeam.score} - ${vTeam.score}` :
        `${vTeam.score} - ${hTeam.score}`;

      const formatUTCDate = (gameDateUTC) => {
        const parsedArray = new Date(gameDateUTC).toDateString().split(' ');
        const el = parsedArray[2];

        return (el.charAt(0) === '0' ?
          `${parsedArray[0]}. ${parsedArray[1]} ${el.substring(1)}, ${parsedArray[3]}`:
          `${parsedArray[0]}. ${parsedArray[1]} ${el}, ${parsedArray[3]}`
        );
      };

      const tableArray = [
        {title: 'result', value: score},
        {title: 'points', value: points},
        {title: 'assists', value: assists},
        {title: 'off reb', value: offReb},
        {title: 'def reb', value: defReb},
        {title: 'tot reb', value: totReb},
      ];

      return (
        <div key={gameId} className={styles.game}>
          <header>
            <div>{isHomeGame ? 'vs' :'@'}</div>
            <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${oppTeam.tricode}.svg`} alt='team logo' />
            <div>{oppTeam.ttsName}</div>
            <div style={{ color : teamColor }} className={styles.date}>{formatUTCDate(gameDateUTC)}</div>
          </header>
          <div className={styles.line} />
          <Table array={tableArray} teamColor={teamColor} section='games' result={getGameResult()} />
        </div>
      );
  });

  const override = css`
    display: flex;
    align-items: center;
    height: 43px;
  `;

  return (
    <section className={styles.recentGames}>
      <Title title='recent games' teamColor={teamColor} section='games' />
      {isLoading ?
        <ScaleLoader
          css={override}
          height={8}
          width={3}
          radius={2}
          margin={2}
          color={'lightgrey'}
          loading={isLoading}
        /> :
        recentGames
      }
    </section>
  );
};

export default RecentGamesStats;
