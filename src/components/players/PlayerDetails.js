import React from 'react';
import { connect } from 'react-redux';

const PlayerDetails = ({ player }) => {
    if (!player) {
        return (
            <div className="player-details-container">
                <div className="picture"/>
                <div className="underline"/>
                <div className="box">
                    <div>
                        <div className="text1"/>
                        <div className="text2"/> 
                    </div>
                    <div className="circle"/>
                </div>
                <div className="text3"/>
            </div>
        )
    }

    const { playerId, playerFirstName, playerLastName, points, ppg, blocks, steals, playerPosition, playerJerseyNumber } = player;
    console.log(player, 'player');

    return (
        <div className="player-details-container">
            <div className="player-details-card">
                <div className="image-container">
                    <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${playerId}.png`} alt="Player Headshot"/>  
                </div>
                    
                <div className="image-border-bottom"></div>
                <div className="stats-container">
                    <div className="stats-name-container">
                        <div className="stats-name">{playerFirstName} {playerLastName}</div>
                        <div className="stats-number">{playerJerseyNumber}</div>
                    </div>
                    <div className="stats-position">{playerPosition}</div>
                    <div className="simple-stats-container">
                        <div>
                            <div className="title">Ppg</div>
                            <div className="stat">{ppg}</div>
                        </div>
                        <div>
                            <div className="title">Reb</div>
                            <div className="stat">{player.totReb}</div>
                        </div>
                        <div>
                            <div className="title">Ast</div>
                            <div className="stat">{player.assists}</div>
                        </div>
                        <div>
                            <div className="title">Fg %</div>
                            <div className="stat">{player.fgp}</div>
                        </div>
                    </div>
                    <div className="title">Stats</div>
                    <div className="long-stats-container">
                        <div className="box">
                            <div className="long-stats-title">Gp</div>
                            <div className="long-stat">{player.gamesPlayed}</div>
                        </div> 
                        <div className="box">
                            <div className="long-stats-title">Min</div>
                            <div className="long-stat">{player.min}</div>
                        </div>
                        <div className="box">
                            <div className="long-stats-title">Fg%</div>
                            <div className="long-stat">{player.fgp}</div>
                        </div>
                        <div className="box">
                            <div className="long-stats-title">3p%</div>
                            <div className="long-stat">{player.tpp}</div>
                        </div>
                        <div className="box">
                            <div className="long-stats-title">Ft%</div>
                            <div className="long-stat">{player.ftp}</div>
                        </div>
                        <div className="box">
                            <div className="long-stats-title">Reb</div>
                            <div className="long-stat">{player.totReb}</div>
                        </div>
                        <div className="box">
                            <div className="long-stats-title">Ast</div>
                            <div className="long-stat">{player.assists}</div>
                        </div>
                        <div className="box">
                            <div className="long-stats-title">Blk</div>
                        <div className="long-stat">{player.blocks}</div>
                        </div>
                        <div className="box">
                            <div className="long-stats-title">Stl</div>
                            <div className="long-stat">{player.steals}</div>
                        </div>
                        <div className="box">
                            <div className="long-stats-title">Pf</div>
                            <div className="long-stat">{player.pFouls}</div>
                        </div>
                        <div className="box">
                            <div className="long-stats-title">To</div>
                            <div className="long-stat">{player.turnovers}</div>
                        </div>
                        <div className="box">
                            <div className="long-stats-title">Pts</div>
                            <div className="long-stat">{player.points}</div>
                        </div>
                    </div>
                    <div className="title">Recent Games</div>
                    <div className="game-container">
                        <div><span>@</span><span><img/></span><span>Team1</span><span>Date</span></div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

const mapStateToProps = state => ({ player: state.selectPlayer });

export default connect(mapStateToProps)(PlayerDetails);