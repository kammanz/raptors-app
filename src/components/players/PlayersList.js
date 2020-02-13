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
        return players.map((player, index) => {
            return (
                <div key={index} onClick={() => this.props.selectPlayer(player)}>
                    {player.PLAYER_NAME}
                </div>
            ); 
        });
    }

    render() {
        return (
            <div>
                <h3>Players</h3>
                <div>{this.renderPlayers()}</div>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { players: state.players };
}

export default connect(mapStateToProps,
        { 
            getPlayers,
            selectPlayer,
        }
)(PlayersList);