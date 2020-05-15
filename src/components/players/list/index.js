import React, { createRef } from 'react';
import { connect } from 'react-redux';

import classnames from 'classnames';

import { getSelectedPlayer } from '../../../actions/actions.js';

import placeholderImg from '../../../assets/imgs/placeholder.png';
import styles from './index.module.scss';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.containerRef = React.createRef();

        this.state = {
            selectedId: null,
            selectedTeam: this.props.selectedTeam,
            scrollPosition: 0,
        };
    };

    handleChange(e) {
        console.log(e.target);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedTeam !== this.props.selectedTeam) {
            this.setState({ selectedId: null });
            this.containerRef.current.scrollTo(0, 0);
        };
    };

    renderPlayers() {
        const { players, selectedTeam } = this.props;

        return players.map((player, index) => {
            const isSelected = this.state.selectedId === player.person_id;
            const { teamColor } = player;

            return (
                <div
                    key={index}
                    onClick={() => {
                        this.setState({ selectedId: player.person_id })
                        this.props.getSelectedPlayer(player);
                    }}
                    className={classnames(styles.playerCard, isSelected ? styles.selectedCard : null)}
                >
                    <div className={styles.imageContainer}>
                        <img 
                            src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${selectedTeam.teamId}/2019/260x190/${player.person_id}.png`} 
                            alt="player headshot" 
                            onError={(e) => e.target.src = placeholderImg}
                        />
                    </div>
                    <div style={{borderColor: teamColor}} className={styles.imageLine} />
                    <div style={{backgroundColor: isSelected && teamColor}} className={styles.detailsContainer}>
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
    };

    render() {
        return (
            <div ref={this.containerRef} className={styles.playersListContainer}>
                {this.renderPlayers()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { players: state.players, selectedTeam: state.selectedTeam };
};

export default connect(mapStateToProps, { getSelectedPlayer })(List);
