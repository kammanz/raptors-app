import React, { createRef } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import placeholderImg from 'assets/imgs/placeholder.png';
import { getSelectedPlayer, setImagesHaveLoaded } from 'actions/actions.js';
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
            loading: true,
        };
    };

    componentDidUpdate(prevProps, prevState) {
        (prevProps.selectedTeam !== this.props.selectedTeam && this.setState({ selectedPlayerId: null, loading: false }));

        (prevState.loading === false && prevProps.selectedTeam !== this.props.selectedTeam && this.setState({ loading: true }));
        
        (prevState.loading === true && prevProps.selectedTeam === this.props.selectedTeam && this.setState({ loading: false }));
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
                            src={formatPlayerPhotoUrl(selectedTeam.teamId, player.person_id)}
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
        const { loading } = this.state;
        // make it absolute
        return (
            <div ref={this.ref} ref={element => this.galleryElement = element} className={styles.playersListContainer}>
                    {this.renderPlayers()}
                    {/* {loading ? <Overlay isLoading={loading}/> : <div/>}
                    {loading ? <Spinner position={'absolute'} containerHeight={30} isLoading={loading}/> : <div/>} */}
                    <Overlay isLoading={loading} />
                    <Spinner 
                        position={'absolute'}
                        top={45} 
                        // bottom={50}
                        // right={45}
                        left={45}
                        containerHeight={30} 
                        isLoading={!loading} 
                    />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { players: state.players, selectedTeam: state.selectedTeam, loadingState: state.loadingState };
};

export default connect(mapStateToProps, { getSelectedPlayer, setImagesHaveLoaded })(List);
