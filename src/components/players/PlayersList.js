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
                <div key={index} onClick={() => this.props.selectPlayer(player.person_id, player.display_name, )}>
                    <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${player.person_id}.png`} />
                    <div>{player.display_name}</div>
                    <div>Height: {player.height_ft}-{player.height_in}</div>
                    <div>Weight: {player.weight_lbs}lbs</div>
                    <div>Position: {player.position_full}</div>
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