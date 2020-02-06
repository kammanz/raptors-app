import React from 'react';
import { connect } from 'react-redux';
import { getPlayers } from '../../actions/actions.js';
import { selectPlayer } from '../../actions/actions.js';

class PlayersList extends React.Component {
    componentDidMount() {
        this.props.getPlayers();
    }

    renderPlayers() {
        const { players } = this.props;
        console.log(this.props, 'this.props in renderplayers function');
        return players.map((player, index) => {
            return (
                <div key={index} onClick={() => this.props.selectPlayer(player)}>
                    {player.first_name}
                </div>
            ); 
        });
    }

    render() {
        console.log(this.props.players.first_name);
        return (
            <div>
                <h3>Players</h3>
                <div>{this.renderPlayers()}</div>
                <br/>
            </div>
        )
    }
}

const getMyState = (state) => {
    return { players: state.players };
}

export default connect(getMyState,
        { 
            getPlayers,
            selectPlayer,
        }
)(PlayersList);