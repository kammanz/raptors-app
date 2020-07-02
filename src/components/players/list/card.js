import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import placeholderImg from 'assets/imgs/placeholder.png';
import { formatPlayerPhotoUrl } from 'utils/stringUtils';

import styles from './index.module.scss';

const Card = ({
  player,
  player: { person_id, first_name, last_name, jersey_number, position_full, height_ft, height_in, weight_lbs },
  getSelectedPlayer,
  selectedPlayerId,
  selectedTeam: { teamId, teamColor, urlName },
  history,
}) => {
  const isSelected = person_id === selectedPlayerId;
  return (
    <div
      onClick={() => {
        history.push(`/${urlName}/players/${person_id}`);
        getSelectedPlayer(player);
      }}
      className={classnames(styles.playerCard, isSelected && styles.selectedCard)}>
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
};

Card.propTypes = {
  formatPlayerPhotoUrl: PropTypes.func,
  getSelectedPlayer: PropTypes.func.isRequired,
  history: PropTypes.object,
  player: PropTypes.object.isRequired,
  placeholderImg: PropTypes.string,
  first_name: PropTypes.string,
  height_ft: PropTypes.string,
  height_in: PropTypes.string,
  jersey_number: PropTypes.string,
  last_name: PropTypes.string,
  person_id: PropTypes.string,
  position_full: PropTypes.string,
  selectedPlayerId: PropTypes.string,
  teamColor: PropTypes.string,
  teamId: PropTypes.string,
  urlName: PropTypes.string,
  weight_lbs: PropTypes.string,
  isSelected: PropTypes.bool,
};

Card.defaultProps = {
  formatPlayerPhotoUrl: null,
  history: null,
  placeholderImg: null,
  first_name: null,
  height_ft: null,
  height_in: null,
  jersey_number: null,
  last_name: null,
  person_id: null,
  position_full: null,
  selectedPlayerId: null,
  teamColor: null,
  teamId: null,
  urlName: null,
  weight_lbs: null,
  isSelected: false,
};

export default withRouter(Card);
