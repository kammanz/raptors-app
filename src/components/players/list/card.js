import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import styles from './index.module.scss';

const Card = ({
  personId,
  firstName,
  lastName,
  jerseyNumber,
  position,
  heightInFeet,
  heightInInches,
  weight,
  urlName,
  teamId,
  teamColor,
  player,
  isSelected,
  getSelectedPlayer,
  history,
  formatPlayerPhotoUrl,
  placeholderImg,
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

export default withRouter(Card);
