import React, { useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Overlay from 'components/_shared/overlay';
import Spinner from 'components/_shared/spinner';
import placeholderImg from 'assets/imgs/placeholder.png';
import { getSelectedPlayer } from 'actions';
import { formatPlayerPhotoUrl } from 'utils/stringUtils';

import styles from './index.module.scss';

const List = ({
  player: {
    details: { person_id: selectedPlayerId },
  },
  players,
  isLoading,
  selectedTeam,
  selectedTeam: { teamId, teamColor, urlName },
  history,
  getSelectedPlayer,
}) => {
  const domRef = useRef();
  const selectedTeamRef = useRef(selectedTeam);

  useEffect(() => {
    if (selectedTeamRef.current !== selectedTeam) {
      domRef.current.scrollTo(0, 0);
    }
  });

  const renderPlayers = () =>
    players.map((player, index) => {
      const {
        person_id,
        first_name,
        last_name,
        jersey_number,
        position_full,
        height_ft,
        height_in,
        weight_lbs,
      } = player;
      const isSelected = person_id && selectedPlayerId === person_id;

      return (
        <div
          key={index}
          onClick={() => {
            history.push(`/${urlName}/players/${person_id}`);
            getSelectedPlayer(player);
          }}
          className={classnames(styles.playerCard, isSelected && styles.selectedCard)}
        >
          <div className={styles.imageContainer}>
            <img
              src={person_id ? formatPlayerPhotoUrl(teamId, person_id) : placeholderImg}
              alt="player headshot"
              onError={(e) => (e.target.src = placeholderImg)}
            />
          </div>
          <div style={{ borderColor: teamColor }} className={styles.imageLine} />
          <div style={{ backgroundColor: isSelected && teamColor }} className={styles.detailsContainer}>
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

  // const isLoading = !players.some((player) => Object.keys(player).length !== 0);

  return (
    <div ref={domRef} className={classnames(styles.container, isLoading && styles.noScroll)}>
      <Overlay isLoading={isLoading}>
        <Spinner height={19} width={4} radius={3} isLoading={isLoading} />
      </Overlay>
      {renderPlayers()}
    </div>
  );
};

const mapStateToProps = ({ player, players: { list, isLoading }, teams: { selectedTeam } }) => {
  return { player, players: list, isLoading, selectedTeam };
};

export default connect(mapStateToProps, { getSelectedPlayer })(withRouter(List));
