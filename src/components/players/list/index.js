import React from 'react';
import { connect } from 'react-redux';

import { getPlayers, getSelectedPlayer, selectedTeam } from '../../../actions/actions.js';

import styles from './index.module.scss';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: null,
        }
    }

    componentDidUpdate(prevProps) {
        // if(this.props.selectedTeam !== prevProps.selectedTeam) {
        //     const teamName = this.props.selectedTeam.urlName;
        //     this.props.getPlayers(teamName);
        // };
    };

    renderPlayers() {
        const { players } = this.props;
        // console.log(this.props);

        return players.map((player, index) => {
            const isSelected = this.state.selectedId === player.person_id;

            return (
                <div
                    key={index}
                    onClick={() => {
                        this.setState({ selectedId: player.person_id })
                        this.props.getSelectedPlayer(player);
                    }}
                    className={isSelected ? `${styles.playerCard} ${styles.selectedCard}` : styles.playerCard}
                >
                    <div className={styles.imageContainer}>
                        <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612761/2019/260x190/${player.person_id}.png`} alt="Player Headshot"/>
                    </div>
                    <div className={styles.imageLine}></div>
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
    return { players: state.players, selectedTeam: state.selectedTeam };
}

export default connect(mapStateToProps,
        {
            getPlayers,
            getSelectedPlayer,
        }
)(List);
