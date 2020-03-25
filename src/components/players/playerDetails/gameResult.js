import React from 'react';
import styles from './gameResult.module.scss';
import Stats from './stats';

const GameResult = ({ teams, games }) => {
    const gamesArray = Object.values(games);
    const teamsArray = Object.values(teams);
    console.log(gamesArray, teamsArray);

    const opposingTeamArray = gamesArray.map((game)=> {
        return {
          ...(game.isHomeGame ? game.vTeam : game.hTeam),
          gameDate: game.gameDateUTC,
          isHomeGame: game.isHomeGame,
          selectedTeamScore: game.isHomeGame ? game.hTeam.score : game.vTeam.score,
          playerGameStats: game.stats
        };
    });

    const threeMatchingTeams = (opposingTeamArray, teamsArray) => {
        const finalArray = [];

        teamsArray.map((team)=> {
            opposingTeamArray.map((oppTeam)=> {
                if (oppTeam.teamId === team.teamId) {
                    finalArray.push({...team, score: oppTeam.score, isWinner: oppTeam.isWinner, gameDate: oppTeam.gameDate, isHomeGame: oppTeam.isHomeGame, selectedTeamScore: oppTeam.selectedTeamScore, playerGameStats: oppTeam.playerGameStats });
                }
                 return null;
            });
        });

        return finalArray;
    };

    const matchingTeamArray = threeMatchingTeams(opposingTeamArray, teamsArray);

    const individualGame = matchingTeamArray.map((game, index)=>{
        const { isHomeGame, tricode, ttsName, gameDate, score, isWinner, selectedTeamScore, playerGameStats } = game;
        const { points, offReb, defReb, totReb, assists } = playerGameStats;
        // console.log(points, 'fuck up');
        const parsedDate = new Date(gameDate).toDateString();
        // const parsedDate2 = parsedDate.toDateString();
        return (
            <div key={index} className={styles.container}>
                <div className={styles.titleContainer}>
                    {isHomeGame ?
                        <div key={index}>vs</div> :
                        <div key={index}>@</div>
                    }
                    <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${tricode}.svg`} height="50" />
                    <div>{ttsName}</div>
                    <div>{parsedDate}</div>
                </div>
                <div className={styles.resultsContainer}>
                    {isWinner ?
                        <div>L</div> : <div>W</div>
                    }
                    {isWinner ?
                        <div>{score} - {selectedTeamScore}</div> :
                        <div>{selectedTeamScore} - {score}</div>
                    }
                    <div>
                        {/* <div>points: {points}</div>
                        <div>assists {assists}</div>
                        <div>offensive rebounds: {offReb}</div>
                        <div>defensive rebounds: {defReb}</div>
                        <div>total rebounds: {totReb}</div>
                        <div>assists: {assists}</div> */}
                    </div>

                    <Stats title="Points" stat={points} />
                </div>

            </div>
        )
    })

    // console.log(individualGame);

    return (
        // <div>{individualGame}</div>
        <div>
          {
            gamesArray.map(({
              gameId,
              isHomeGame,
              hTeam,
              vTeam,
            }) => {
              const homeTeam = isHomeGame ? hTeam : vTeam;
              const oppTeamId = isHomeGame ? vTeam.teamId : hTeam.teamId;
              const oppTeamObj = teamsArray.find(team => team.teamId === oppTeamId);

              const gameResult = homeTeam.isWinner ? 'W' : 'L';
              const score = parseInt(hTeam.score) > parseInt(vTeam.score) ? `${hTeam.score} - ${vTeam.score}` : `${vTeam.score} - ${hTeam.score}`;
              return (
                <div key={gameId}>
                  <div>{isHomeGame ? 'vs' :'@'}</div>
                  <div>{oppTeamId}</div>
                  <div>{oppTeamObj.ttsName} {oppTeamObj.tricode}</div>
                  <div>{gameResult}</div>
                  <div>{score}</div>
                </div>
              );
          })}
        </div>
        // <div>
        //     {isHomeGame ? <div>@</div> : <div>vs</div>}
        //     <div>{opponentName}</div>
        //     <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${tricode}.svg`} />
        //     <div>{date2}</div>
        // </div>

    );
    // return <div>Nothing yet</div>;
};

export default GameResult;
