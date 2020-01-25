import React from 'react';
import { connect } from 'react-redux';

const PlayerDetails = (props)=> {
        const { selectPlayer } = props;
        console.log(props.selectPlayer);

    if (!selectPlayer) {
        return <h3>Select a Player</h3>
    }

    return (
        <div>
            <h3>Stats</h3>            
            <div>Total Points: {selectPlayer.points}</div>
            <div>Points per Game: {selectPlayer.ppg}</div>
            <div>Blocks: {selectPlayer.blocks}</div>
            <div>Steals: {selectPlayer.steals}</div>
        </div>        
    );
}

const mapStateToProps = state => {
    return { selectPlayer: state.selectPlayer}
}

export default connect(mapStateToProps,)(PlayerDetails);