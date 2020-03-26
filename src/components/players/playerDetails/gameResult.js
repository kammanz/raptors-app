import React from 'react';
import styles from './gameResult.module.scss';
import Stats from './stats';

const GameResult = ({ teams, games }) => {
    const gamesArray = Object.values(games);
    const teamsArray = Object.values(teams);
    console.log(gamesArray);
    return (
        <div>
          {
            gamesArray.map(({
              gameId,
              isHomeGame,
              hTeam,
              vTeam,
              gameDateUTC,
            }) => {

              console.log(gameDateUTC);
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

              const date = new Date(gameDateUTC).toDateString();  
              // const date = gameDateUTC.toDateString();  

              return (
                <div key={gameId}>
                  <header /*className={styles.container}*/>
                    <div>{isHomeGame ? 'vs' :'@'}</div>
                    <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${oppTeam.tricode}.svg`} height="42" alt="team logo" />
                    <div>{oppTeam.ttsName} </div>
                    <div className={styles.date}>{date}</div>
                  </header>
                  <section>
                    <div>{getGameResult()}</div>
                    <div>{score}</div>
                  </section>
                </div>
                
              );
          })}
        </div>
    );
};

export default GameResult;
