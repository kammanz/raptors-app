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
        // console.log(this.props.selectedTeam.isLoading);

        // if (this.props.selectedTeam.isLoading) {
        //     // this.ref.current.scrollTo(0,0);
        //     this.ref.current.style.overflow = 'hidden';
        // } else {
        //     this.ref.current.style.overflow = 'auto';
        // }

        if (prevProps.selectedTeam !== this.props.selectedTeam) { 
            this.setState({ selectedPlayerId: null });
            // this.ref.current.scrollTo(0,0);
        };
    };

    renderPlayers() {
        const { 
            players, 
            selectedTeam: {
                isLoading,
                team: { teamId }
            } 
        } = this.props;

        // const { isLoading, team } = selectedTeam; 
        // const { teamId } = team;
        // console.log('isLoading renderPlayers', isLoading);

        return players.map((player, index) => {
            // console.log('isLoading renderPlayers map function', isLoading);
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
                            // src={placeholderImg}
                            // src={isLoading ? placeholderImg : null}
                            src={isLoading && !teamId ? placeholderImg : formatPlayerPhotoUrl(teamId, person_id)}
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
                            <div className={styles.size}>{height_ft}-{height_in}, {weight_lbs} lbs</div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    render() {
        const { isLoading } = this.props.selectedTeam;
        console.log('render this.props.selectedTeam', this.props.selectedTeam);
        console.log('isLoading render', isLoading);

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
