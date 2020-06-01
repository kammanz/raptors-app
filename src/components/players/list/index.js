import React, { createRef } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Overlay from 'components/_shared/overlay';
import Spinner from 'components/_shared/spinner';
import placeholderImg from 'assets/imgs/placeholder.png';
import { getSelectedPlayer } from 'actions/actions.js';
import { formatPlayerPhotoUrl } from 'utils/stringUtils';

import styles from './index.module.scss';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPlayerId: null,
        };

        this.ref = createRef();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.selectedTeam !== this.props.selectedTeam) { 
            this.setState({ selectedPlayerId: null });
            this.ref.current.scrollTo(0,0);
        };
    };

    renderPlayers() {
        const { 
            players, 
            selectedTeam: {
                isLoading,
                team: { teamId },
            }, 
        } = this.props;

        const emptyPlayers = new Array(20).fill({});

        return (isLoading ? emptyPlayers : players).map((player, index) => {
            const { 
                teamColor, 
                person_id,
                first_name,
                last_name, 
                jersey_number,
                position_full,
                height_ft,
                height_in,
                weight_lbs,
            } = player;
            
            const isSelected = this.state.selectedPlayerId === person_id;
            
            return (
                <div
                    key={index}
                    onClick={() => {
                        this.setState({ selectedPlayerId: person_id });
                        this.props.getSelectedPlayer(player);
                    }}
                    className={classnames(styles.playerCard, isSelected && styles.selectedCard)}
                >
                    <div className={styles.imageContainer}>
                        <img
                            src={isLoading ? placeholderImg : formatPlayerPhotoUrl(teamId, person_id)}
                            alt='player headshot'
                            onError={(e) => e.target.src = placeholderImg}
                        />
                    </div>
                    <div style={{borderColor: teamColor}} className={styles.imageLine} />
                    <div style={{backgroundColor: isSelected && teamColor}} className={styles.detailsContainer}>
                        <div className={styles.number}>{jersey_number}</div>
                        <div className={styles.details}>
                            <div className={styles.name}>{first_name} {last_name}</div>
                            <div className={styles.position}>{position_full}</div>
                            <div className={styles.size}>{height_ft}-{height_in}, {weight_lbs} {!isLoading && 'lbs'}</div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    render() {
        const { isLoading } = this.props.selectedTeam;

        return (
            <div ref={this.ref} className={styles.container}>
                <Overlay isLoading={isLoading}>
                    <Spinner height={19} width={4} radius={3} isLoading={isLoading} />
                </Overlay>
                {this.renderPlayers()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { players: state.players, selectedTeam: state.selectedTeam };
};

export default connect(mapStateToProps, { getSelectedPlayer })(List);