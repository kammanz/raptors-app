import React from 'react';
import { connect } from 'react-redux';

import { getSelectedPlayer } from '../../../actions/actions.js';

import styles from './index.module.scss';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: null,
        };
    }

    renderPlayers() {
        const { players, selectedTeamColor } = this.props;

        return players.map((player, index) => {
            const isSelected = this.state.selectedId === player.person_id;

            return (
                <div
                    key={index}
                    onClick={() => {
                        this.setState({ selectedId: player.person_id })
                        this.props.getSelectedPlayer(player);
                    }}
                    
                    // style={{if (isSelected) => backgroundColor: `${selectedTeamColor}`;}}
                    className={isSelected ? `${styles.playerCard} ${styles.selectedCard}` : styles.playerCard}
                >
                    <div className={styles.imageContainer}>
                        <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${player.person_id}.png`} alt="Player Headshot"/>
                    </div>
                    <div style={{ borderBottom: `2px solid ${selectedTeamColor}`}} className={styles.imageLine} />
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
        );
    }
}

const mapStateToProps = (state) => {
    return { players: state.players, selectedTeamColor: state.selectedTeamColor };
}

export default connect(mapStateToProps, { getSelectedPlayer })(List);
