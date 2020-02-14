import React from 'react';
import { connect } from 'react-redux';

const PlayerDetails = ({ player })=> {
    console.log(player, 'player');

    if (!player) {
        return null;
    }

    const { playerId, playerFirstName, playerLastName,  points, ppg, blocks, steals, playerPosition, playerJerseyNumber } = player;

    return (
        <div className="player-details-container">
            <div className="image-container-details">
              <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${playerId}.png`} alt="Player Headshot"/>  
            </div>
            
            <div className="image-border-bottom"></div>
            <div className="details-details-container">
                <div id="details-name-container">
                    <div className="player-details-name">{playerFirstName} {playerLastName}</div>
                   <div className="player-details-number">{playerJerseyNumber}</div>
                </div>
                <div className="player-details-position">{playerPosition}</div>
            </div>  
        </div>        
    );
}

const mapStateToProps = state => ({ player: state.selectPlayer });

export default connect(mapStateToProps)(PlayerDetails);