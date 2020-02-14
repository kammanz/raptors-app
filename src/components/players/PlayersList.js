import React from 'react';
import { connect } from 'react-redux';

import { getPlayers, selectPlayer } from '../../actions/actions.js';

class PlayersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCard: null,
        }
    }

    componentDidMount() {
        this.props.getPlayers();
    }

    renderPlayers() {
        const { players } = this.props;
        
        return players.map((player, index) => {
            return (
                <div 
                    key={index}
                    onClick={(index) => {
                        const el = index.target;
                        if (this.state.selectedCard === null) {
                            this.setState({ selectedCard: el});
                            el.classList.add("selected-card");
                        }

                        if (this.state.selectedCard !== null && el !== this.state.selectedCard) {
                            this.state.selectedCard.classList.remove("selected-card");
                            this.setState({ selectedCard: el});
                            el.classList.add("selected-card");
                        }
                    
                        this.props.selectPlayer(player.person_id, player.display_name);
                    }}
                    className="player-card"
                >
                    <div className="image-container">
                        <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${player.person_id}.png`} />
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