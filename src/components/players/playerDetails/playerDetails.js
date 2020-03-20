import React from 'react';
import { connect } from 'react-redux';

import Placeholder from './placeholder.js';
import Stats from './stats';
import GameResult from './gameResult.js';

import styles from './playerDetails.module.scss';

// raptors team id: 1610612761

const PlayerDetails = ({ player, teams, games }) => {
    if (!player) {
        return (
            <div className={styles.container}>
                <Placeholder />
            </div>
        );
    }

console.log(games, 'games');

var threeGames = Object.values(games);

var singleGame = threeGames.map((obj) => {
    const team = obj.hTeam.teamId;
    // console.log(team);
    
    if (team === 1610612761) {
        return "you are the raptors";
    }

    return "you are not the raptors";
});

// console.log(singleGame);

    const {
      person_id,
      first_name,
      last_name,
      position_full,
      jersey_number,
      height_ft,
      height_in,
      weight_lbs,
    } = player;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${person_id}.png`} alt="Player Headshot" />
                </div>

                <div className={styles.imageBorderBottom}></div>
                <div className={styles.statsContainer}>
                    <div className={styles.nameContainer}>
                        <div className={styles.name}>{first_name} {last_name}</div>
                        <div className={styles.jerseyNumber}>{jersey_number}</div>
                    </div>
                    <div className={styles.position}>{position_full}</div>
                    <div className={styles.details}>{height_ft}-{height_in}, {weight_lbs} lbs</div>
                </div>
                <div className={styles.mainStatsContainer}>
                    <Stats isQuickStats={true} title="Ppg" stat={player.ppg} />
                    <Stats isQuickStats={true} title="Reb" stat={player.totReb} />
                    <Stats isQuickStats={true} title="Ast" stat={player.assists} />
                    <Stats isQuickStats={true} title="FG %" stat={player.fgp} />
                </div>
                <div className={styles.title}>Stats</div>
                <div className={styles.mainStatsContainer}>
                    <Stats isQuickStats={false} title="GP" stat={player.gamesPlayed} />
                    <Stats isQuickStats={false} title="Min" stat={player.min} />
                    <Stats isQuickStats={false} title="Fg%" stat={player.gamesPlayed} />
                    <Stats isQuickStats={false} title="3P%" stat={player.gamesPlayed} />
                    <Stats isQuickStats={false} title="Ft%" stat={player.fgp} />
                    <Stats isQuickStats={false} title="Reb" stat={player.totReb} />
                    <Stats isQuickStats={false} title="Ast" stat={player.assists} />
                    <Stats isQuickStats={false} title="Blk" stat={player.blocks} />
                    <Stats isQuickStats={false} title="Stl" stat={player.steals} />
                    <Stats isQuickStats={false} title="Pf" stat={player.pFouls} />
                    <Stats isQuickStats={false} title="To" stat={player.turnovers} />
                    <Stats isQuickStats={false} title="Pts" stat={player.points} />
                </div>
                <div className={styles.title}>Recent Games</div>
                <div className={styles}>
                    <GameResult />
                </div>
            </div>  
        </div>
    )
}

const mapStateToProps = state => ({ player: state.player, teams: state.teams, games: state.games });

export default connect(mapStateToProps)(PlayerDetails);
