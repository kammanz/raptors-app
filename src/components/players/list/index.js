import React, { createRef } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import placeholderImg from 'assets/imgs/placeholder.png';
import { getSelectedPlayer, setImagesHaveLoaded } from 'actions/actions.js';
import { formatPlayerPhotoUrl } from 'utils/stringUtils';

import styles from './index.module.scss';

function imagesLoaded(parentNode) {
    const imgElements = parentNode.querySelectorAll("img");
    for (const img of imgElements) {
        if (!img.complete) {
        return false;
        };
    };
    return true;
};

class List extends React.Component {
    constructor(props) {
        super(props);
        // console.log('props', props);

        this.ref = createRef();
        this.lastIndexItem = createRef();
        this.galleryElement = createRef();

        this.state = {
            selectedId: null,
            selectedTeam: this.props.selectedTeam,
            loading: true,
        };
    };

    componentDidUpdate(prevProps, prevState) {
        // console.log('comp did update');
        if (prevProps.selectedTeam !== this.props.selectedTeam) {
            this.setState({ selectedId: null });
        };

        if(this.state.loading === false) {
            // console.log('player images loaded');
            this.props.setImagesHaveLoaded();
        };
    };

    handleOnload = () => {
        this.setState({ loading: !imagesLoaded(this.galleryElement) });
    };

    renderPlayers() {
        const { players, selectedTeam } = this.props;
        // if(this.state.loading === false) {
        //     console.log('player images loaded');
        // }

        // what happens after loading equals false. 

        return players.map((player, index) => {
            const isSelected = this.state.selectedId === player.person_id;
            const { teamColor } = player;
           
            return (
                <div
                    key={index}
                    onClick={() => {
                        this.setState({ selectedId: player.person_id });
                        this.props.getSelectedPlayer(player);
                    }}
                    className={classnames(styles.playerCard, isSelected ? styles.selectedCard : null)}
                >
                    <div className={styles.imageContainer}>
                        <img
                            src={formatPlayerPhotoUrl(selectedTeam.teamId, player.person_id)}
                            alt='player headshot'
                            onError={(e) => e.target.src = placeholderImg}
                            onLoad={this.handleOnload}
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
            <div ref={this.ref} ref={element => this.galleryElement = element} className={styles.playersListContainer}>
                    {this.renderPlayers()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { players: state.players, selectedTeam: state.selectedTeam, loadingState: state.loadingState };
};

export default connect(mapStateToProps, { getSelectedPlayer, setImagesHaveLoaded })(List);
