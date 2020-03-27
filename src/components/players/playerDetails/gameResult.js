import React from 'react';
import styles from './gameResult.module.scss';
import Stats from './stats';

const GameResult = ({ teams, games }) => {
    const gamesArray = Object.values(games);
    const teamsArray = Object.values(teams);

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

              return (
                <div key={gameId}>
                  <header /*className={styles.container}*/>
                    <div>{isHomeGame ? 'vs' :'@'}</div>
                    <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${oppTeam.tricode}.svg`} height="42" alt="team logo" />
                    <div>{oppTeam.ttsName} </div>
                    <div className={styles.date}>{formattedDate(dateArray)}</div>
                  </header>
                  <section>
                    {/* <div className={styles.result}>{getGameResult()}</div> */}
                    {/* <div>{score}</div> */}
                    <Stats title="result" stat={score} result={getGameResult()}/>
                    <Stats title="points" stat={score} />
                    <Stats title="assists" stat={score} />
                    <Stats title="off reb" stat={score} />
                    <Stats title="def reb" stat={score} />
                    <Stats title="tot reb" stat={score} />
                  </section>
                </div>
              );
          })}
        </div>
    );
};

export default GameResult;
