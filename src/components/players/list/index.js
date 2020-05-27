import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import placeholderImg from 'assets/imgs/placeholder.png';
import { getSelectedPlayer } from 'actions/actions.js';
import { formatPlayerPhotoUrl } from 'utils/stringUtils';
import Overlay from 'components/_shared/overlay';
import Spinner from 'components/_shared/spinner';

import styles from './index.module.scss';


class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPlayerId: null,
            selectedTeam: this.props.selectedTeam,
        };
    };

    componentDidUpdate(prevProps, prevState) {
        (prevProps.selectedTeam !== this.props.selectedTeam && this.setState({ selectedPlayerId: null, isLoading: false }));

        (prevState.isLoading === false && prevProps.selectedTeam !== this.props.selectedTeam && this.setState({ isLoading: true }));
        
        (prevState.isLoading === true && prevProps.selectedTeam === this.props.selectedTeam && this.setState({ isLoading: false }));
    };

    renderPlayers() {
        const { players, selectedTeam } = this.props;

        return players.map((player, index) => {
            const isSelected = this.state.selectedPlayerId === player.person_id;
            const { teamColor } = player;
           
            return (
                <div
                    key={index}
                    onClick={() => {
                        this.setState({ selectedPlayerId: player.person_id });
                        this.props.getSelectedPlayer(player);
                    }}
                    className={classnames(styles.playerCard, isSelected ? styles.selectedCard : null)}
                >
                    <div className={styles.imageContainer}>
                        <img
                            src={formatPlayerPhotoUrl(selectedTeam.team.teamId, player.person_id)}
                            alt='player headshot'
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
        const { isLoading } = this.props.selectedTeam;
        console.log(this.props, 'this.props');

        return (
            <div className={styles.playersListContainer}>
                {this.renderPlayers()}
                {isLoading ? <Overlay isLoading={isLoading}/> : <div/>}
                {isLoading ? 
                    <Spinner 
                        position={'absolute'}
                        top={48} 
                        left={48}
                        height={40}
                        isLoading={isLoading} 
                    />:
                    <div/>
                }
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { players: state.players, selectedTeam: state.selectedTeam, teams: state.teams };
};

export default connect(mapStateToProps, { getSelectedPlayer })(List);
