import React from 'react';
import styles from './index.module.scss';
import Stats from '../../../_shared/tableCell';
import Line from '../../../_shared/line';
import Title from '../../../_shared/title';
import Table from '../../../_shared/table';

const Games = ({ teams, games }) => {
  const gamesArray = Object.values(games);
  const teamsArray = Object.values(teams);
  console.log(gamesArray);
  console.log(games);

  // top 

  // bottom

  // const statsForThreeGames = gamesArray.map(({stats})=>  stats.points );

  const shanty = gamesArray.map(({
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

              const tableObj = { result: score, points, assists, offReb, defReb, totReb };
              console.log('here', tableObj);

              // return (
              //   // <div key={gameId} className={styles.game}>
              //   //   <header>
              //   //     <div>{isHomeGame ? 'vs' :'@'}</div>
              //   //     <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${oppTeam.tricode}.svg`} height="42" alt="team logo" />
              //   //     <div>{oppTeam.ttsName}</div>
              //   //     <div className={styles.date}>{formattedDate(dateArray)}</div>
              //   //   </header>
              //   //   <Line />
              //   //   <section>
              //   //     <Stats title="result" stat={score} result={getGameResult()} />
              //   //     <Stats title="points" stat={points} />
              //   //     <Stats title="assists" stat={assists} />
              //   //     <Stats title="off reb" stat={offReb} />
              //   //     <Stats title="def reb" stat={defReb} />
              //   //     <Stats title="tot reb" stat={totReb} />
              //   //   </section>
              //   // </div>
              //   <section>
              //     <Title title="recent games"/>
              //     <div></div>
              //     {/* <Table obj={gamesArray}/> */}
              //   </section>
              // );

              return (
                <section>
                  <header>
                    <div>{isHomeGame ? 'vs' :'@'}</div>
                    <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${oppTeam.tricode}.svg`} height="42" alt="team logo" />
                    <div>{oppTeam.ttsName}</div>
                    <div className={styles.date}>{formattedDate(dateArray)}</div>
                  </header>
                  <Line />
                  <Table obj={tableObj} />
                </section>
              );
            });
            return (<div>
              <Title title="recent games"/>
              {shanty}
              
            </div>);
}         

export default Games;
