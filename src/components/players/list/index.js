import React, { createRef } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Overlay from 'components/_shared/overlay';
import Spinner from 'components/_shared/spinner';
import placeholderImg from 'assets/imgs/placeholder.png';
import { getSelectedPlayer } from 'actions/actions';
import { formatPlayerPhotoUrl } from 'utils/stringUtils';

import styles from './index.module.scss';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlayerId: null,
    };

    this.ref = createRef();
  }

  componentDidUpdate(prevProps) {
    const { selectedTeam } = this.props;
    const { selectedTeam: selectedTeamPrev } = prevProps;

    if (selectedTeamPrev !== selectedTeam) {
      this.setState({ selectedPlayerId: null });
      this.ref.current.scrollTo(0, 0);
    }
  }

  renderPlayers() {
    const {
      players,
      selectedTeam: { teamId },
    } = this.props;

    return players.map((player, index) => {
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
          className={classnames(
            styles.playerCard,
            isSelected && styles.selectedCard
          )}
        >
          <div className={styles.imageContainer}>
            <img
              src={
                person_id
                  ? formatPlayerPhotoUrl(teamId, person_id)
                  : placeholderImg
              }
              alt='player headshot'
              onError={(e) => (e.target.src = placeholderImg)}
            />
          </div>
          <div
            style={{ borderColor: teamColor }}
            className={styles.imageLine}
          />
          <div
            style={{ backgroundColor: isSelected && teamColor }}
            className={styles.detailsContainer}
          >
            {!!Object.keys(player).length && (
              <>
                <div className={styles.number}>{jersey_number}</div>
                <div className={styles.details}>
                  <div className={styles.name}>
                    {first_name} {last_name}
                  </div>
                  <div className={styles.position}>{position_full.replace('-', ' - ')}</div>
                  <div className={styles.size}>
                    {height_ft}' {height_in}, {weight_lbs} lbs
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      );
    });
  }

  render() {
    const { players } = this.props;
    const isLoading = !players.some(
      (player) => Object.keys(player).length !== 0
    );

    return (
      <div
        ref={this.ref}
        className={classnames(styles.container, isLoading && styles.noScroll)}
      >
        <Overlay isLoading={isLoading}>
          <Spinner height={19} width={4} radius={3} isLoading={isLoading} />
        </Overlay>
        {this.renderPlayers()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { players: state.players, selectedTeam: state.selectedTeam };
};

export default connect(mapStateToProps, { getSelectedPlayer })(List);
