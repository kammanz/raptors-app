import React from 'react';

import Line from '../../../_shared/line';
import Title from '../../../_shared/title';
import Table from '../../../_shared/table';

import styles from './index.module.scss';

const Games = ({ teams, games }) => {
  const gamesArray = Object.values(games);
  console.log(gamesArray, 'gamesarray');
  const teamsArray = Object.values(teams);

  const recentGames = gamesArray.map(({
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

      const dateArray = new Date(gameDateUTC).toDateString().split(' ');

      const formattedDate = (array) => {
        const el = array[2];

        return (el.charAt(0) === "0" ? 
          `${array[0]}. ${array[1]} ${el.substring(1)}, ${array[3]}`:
          `${array[0]}. ${array[1]} ${el}, ${array[3]}`
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
        <div key={gameId}>
          <header>
            <div>{isHomeGame ? 'vs' :'@'}</div>
            <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${oppTeam.tricode}.svg`} height="42" alt="team logo" />
            <div>{oppTeam.ttsName}</div>
            <div className={styles.date}>{formattedDate(dateArray)}</div>
          </header>
          <Line />
          <Table array={tableArray} result={getGameResult()}/>
        </div>
      );
  });

  return (
    <section className={styles.games}>
      <Title title="recent games"/>
      {recentGames}
    </section>
  );
}         

export default Games;
