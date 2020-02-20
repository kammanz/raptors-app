import React from 'react';
import { connect } from 'react-redux';

const PlayerDetails = ({ player })=> {
    if (!player) {
        return <div className="player-details-container" />;
    }

    const { playerId, playerFirstName, playerLastName,  points, ppg, blocks, steals, playerPosition, playerJerseyNumber } = player;

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
                </div>
            </div>  
        </div>
    )
}

const mapStateToProps = state => ({ player: state.selectPlayer });

export default connect(mapStateToProps)(PlayerDetails);