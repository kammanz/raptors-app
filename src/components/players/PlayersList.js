import React from 'react';
import { connect } from 'react-redux';

import { getPlayers, selectPlayer } from '../../actions/actions.js';

import styles from './playersList.module.scss';

class PlayersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: null,
        }
    }

    componentDidMount() {
        this.props.getPlayers();
    }

    renderPlayers() {
        const { players } = this.props;
        
        return players.map((player, index) => {
            const isSelected = this.state.selectedId === player.person_id;

            return (
                <div 
                    key={index}
                    onClick={() => {
                        this.setState( { selectedId: player.person_id })
                        this.props.selectPlayer(player.person_id, player.first_name, player.last_name, player.position_full, player.jersey_number);
                    }}
                    className={isSelected ? `${styles.playerCard} ${styles.selectedCard}` : styles.playerCard}
                >
                    <div className={styles.imageContainer}>
                        <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${player.person_id}.png`} alt="Player Headshot"/>
                    </div>
                    <div className={styles.imageBorderBottom}></div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.number}>{player.jersey_number}</div>
                        <div className={styles.details}>
                            <div className={styles.name}>{player.first_name} {player.last_name}</div>
                            <div className={styles.position}>{player.position_full}</div>
                            <div className={styles.size}>{player.height_ft}-{player.height_in}, {player.weight_lbs} lbs</div> 
                        </div>
                    </div>
                </div>
            ); 
        });
    }

    render() {
        return (
            <div className={styles.playersListContainer}>
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
        }
)(PlayersList);