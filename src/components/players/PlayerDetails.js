import React from 'react';
import { connect } from 'react-redux';

const PlayerDetails = (props)=> {
        const { selectPlayer } = props;

    if (!selectPlayer) {
        return <h3>Select a Player</h3>
    }

    return (
        <div>
            <h3>Player Stats</h3>
            
            <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${selectPlayer.playerId}.png`} /> <h4>{selectPlayer.playerName}</h4>           
            <div>Total Points: {selectPlayer.points}</div>
            <div>Points per Game: {selectPlayer.ppg}</div>
            <div>Blocks: {selectPlayer.blocks}</div>
            <div>Steals: {selectPlayer.steals}</div>
        </div>        
    );
}

const mapStateToProps = state => {
    return { selectPlayer: state.selectPlayer }
}

export default connect(mapStateToProps)(PlayerDetails);