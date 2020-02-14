import React from 'react';
import { connect } from 'react-redux';

const PlayerDetails = ({ player })=> {

    if (!player) {
        return <h3>Select a Player</h3>
    }

    const { playerName, playerId, points, ppg, blocks, steals } = player;

    return (
        <div>
            <h3>Stats</h3>
            <h4>{playerName}</h4>
            <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${playerId}.png`} />            
            <div>Total Points: {points}</div>
            <div>Points per Game: {ppg}</div>
            <div>Blocks: {blocks}</div>
            <div>Steals: {steals}</div>
        </div>        
    );
}

const mapStateToProps = state => ({ player: state.selectPlayer });

export default connect(mapStateToProps)(PlayerDetails);