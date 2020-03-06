import React from 'react';
import { connect } from 'react-redux';

import { getPlayers, selectPlayer, todaysGame } from '../../actions/actions.js';

class PlayersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: null,
        }
    }

    componentDidMount() {
        this.props.getPlayers();
        // this.props.todaysGame();
    }

    renderPlayers() {
        const { players } = this.props;
        
        return players.map((player, index) => {
            const isSelected = player.person_id === this.state.selectedId;
            // console.log(player);
            
            return (
                <div 
                    key={index}
                    onClick={() => {
                        this.setState({ selectedId: player.person_id})
                        this.props.selectPlayer(player.person_id, player.first_name, player.last_name, player.position_full, player.jersey_number);
                        this.props.todaysGame(player.person_id);
                    }}
                    className={isSelected ? 'player-card selected-card' : 'player-card'}
                >
                    <div className="image-container">
                        <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${player.person_id}.png`} alt="Player Headshot"/>
                    </div>
                    <div className="image-border-bottom"></div>
                    <div className="details-container">
                        <div className="number">{player.jersey_number}</div>
                        <div className="details">
                            <div className="name">{player.first_name} {player.last_name}</div>
                            <div className="position">{player.position_full}</div>
                            <div className="size">{player.height_ft}-{player.height_in}, {player.weight_lbs} lbs</div> 
                        </div>
                    </div>
                </div>
            ); 
        });
    }

    render() {
        return (
            <div className="players-list-container">
                {this.renderPlayers()}
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
            todaysGame,
        }
)(PlayersList);