import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.module.scss';

const Card = ({
  formatPlayerPhotoUrl,
  getSelectedPlayer,
  history,
  player,
  placeholderImg,
  firstName,
  heightInFeet,
  heightInInches,
  jerseyNumber,
  lastName,
  personId,
  position,
  teamColor,
  teamId,
  urlName,
  weight,
  isSelected,
}) => {
  return (
    <div
      onClick={() => {
        history.push(`/${urlName}/players/${personId}`);
        getSelectedPlayer(player);
      }}
      className={classnames(styles.playerCard, isSelected && styles.selectedCard)}>
      <div className={styles.imageContainer}>
        <img
          src={personId ? formatPlayerPhotoUrl(teamId, personId) : placeholderImg}
          alt="player headshot"
          onError={(e) => (e.target.src = placeholderImg)}
        />
      </div>
      <div style={{ borderColor: teamColor }} className={styles.imageLine} />
      <div style={{ backgroundColor: isSelected && teamColor }} className={styles.detailsContainer}>
        {!!Object.keys(player).length && (
          <>
            <div className={styles.number}>{jerseyNumber}</div>
            <div className={styles.details}>
              <div className={styles.name}>
                {firstName} {lastName}
              </div>
              <div className={styles.position}>{position.replace('-', ' - ')}</div>
              <div className={styles.size}>
                {heightInFeet}' {heightInInches}, {weight} lbs
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  formatPlayerPhotoUrl: PropTypes.func.isRequired,
  getSelectedPlayer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
  placeholderImg: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  heightInFeet: PropTypes.string,
  heightInInches: PropTypes.string,
  jerseyNumber: PropTypes.string,
  lastName: PropTypes.string,
  personId: PropTypes.string,
  position: PropTypes.string,
  teamColor: PropTypes.string,
  teamId: PropTypes.string,
  urlName: PropTypes.string,
  weight: PropTypes.string,
  isSelected: PropTypes.bool,
};

Card.defaultProps = {
  firstName: null,
  heightInFeet: null,
  heightInInches: null,
  jerseyNumber: null,
  lastName: null,
  personId: null,
  position: null,
  teamColor: null,
  teamId: null,
  urlName: null,
  weight: null,
  isSelected: false,
};

export default withRouter(Card);
