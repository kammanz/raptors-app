import React from 'react';
import { connect } from 'react-redux';

import { getPlayers } from '../../actions/actions.js';
import { selectPlayer } from '../../actions/actions.js';

class PlayersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstSelectedCard: null,
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
                        
                        // FIRST SELECTION
                        // 1. check to see if this is the first card selection.
                        if (this.state.firstSelectedCard === null) {

                            // 2. If so, set the current card as the firstSelectedCard...
                            this.setState({ firstSelectedCard: el});

                            // 3. give the first element a class of 'selected-card'
                            el.classList.add("selected-card");

                        }

                        // SECOND SELECTION 
                        // 1. check to see if this is the second AND DIFFERENT card selection 
                        if (this.state.firstSelectedCard !== null && el !== this.state.firstSelectedCard) {

                            // 2. remove the 'selected-card' class from the previous element 
                            this.state.firstSelectedCard.classList.remove("selected-card");
                            
                            // 3. set the new element as the firstSelectedCard
                            this.setState({ firstSelectedCard: el});

                            // 4. give the new element a class of 'selected-card'
                            el.classList.add("selected-card");
                        }
                    
                        this.props.selectPlayer(player.person_id, player.display_name);
                    }}
                    className="player-card">
                    {/* <div> */}
                        <div className="player-image-container">
                            <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${player.person_id}.png`} />
                        </div>
                        <div className="empty-div"></div>
                        <div className="player-details-container">
                            <div className="player-number">{player.jersey_number}</div>
                            <div className="player-attributes">
                                <div className="player-name">{player.first_name} {player.last_name}</div>
                                <div className="player-position">{player.position_full}</div>
                                <div className="player-size">{player.height_ft}-{player.height_in}, {player.weight_lbs} lbs</div> 
                            </div>
                        </div>
                    {/* </div> */}
                    
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
            isClicked,
        }
)(PlayersList);