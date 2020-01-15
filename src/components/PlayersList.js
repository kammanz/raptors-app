import React from 'react';
import { connect } from 'react-redux';
// import fetchPlayersReducer from '../reducers/fetchPlayersReducer.js'
import { fetchPlayers } from '../actions/actions.js';
import { selectPlayer } from '../actions/actions.js';

class PlayersList extends React.Component {
    componentDidMount() {
        this.props.fetchPlayers();
    }

    componentDidUpdate() {
        const {players} = this.props;
        return players.map((player, index)=> {
            return (
                <div key={index} onClick={()=> this.props.selectPlayer(player)}>
                    {player.PLAYER_NAME}
                </div>
            ); 
        });
    }

    render() {
        console.log(this.props.players);
        return (
            <div>
                <h3>Players</h3>
                <div>{this.componentDidUpdate()}</div>
                <br/>
            </div>
        )
    }
}

const getMyState = (state) => {
    return { players: state.players };
}

export default connect(getMyState, {
        fetchPlayers: fetchPlayers,
        selectPlayer: selectPlayer
     }
)(PlayersList);