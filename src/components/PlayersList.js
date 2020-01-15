import React from 'react';
import { connect } from 'react-redux';
// import fetchPlayersReducer from '../reducers/fetchPlayersReducer.js'
import { fetchPlayers } from '../actions/actions.js';
import { selectPlayer } from '../actions/actions.js';

class PlayersList extends React.Component {
    componentDidMount() {
        // console.log(this.props.players, 'motherfuckin props');
        this.props.fetchPlayers();
    }

    componentDidUpdate() {
        // console.log(this.props, 'comp update');
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
      
        const { players, selectPlayer } = this.props;

        // console.log(this.props, 'props');
        // console.log(this.props, 'this.props in render');

        // const playerName2 = joe;


        // const kyle = players[0];
    // const playerName = players.map((player, index)=> <div key={index} onClick={()=> this.props.selectPlayer(player.PLAYER_NAME)}>{player.PLAYER_NAME}</div>);

        // console.log(name, 'name');
        return (
            <div>
                <h3>Players</h3>
                <div>{this.componentDidUpdate()}</div>
                <br/>
                {/* <h3>You clicked on: {selectPlayer}</h3> */}
            </div>
        )
    }
}

const getMyState = (state) => {
    console.log(state, 'state in playerslist');
    return { players: state.players };
}

export default connect(
    getMyState, 
     {
        fetchPlayers: fetchPlayers,
        selectPlayer: selectPlayer
     }
)(PlayersList);