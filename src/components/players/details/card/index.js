import React from 'react';
import classnames from 'classnames';

import placeholderImg from 'assets/imgs/placeholder.png';
import { formatPlayerPhotoUrl } from 'utils/stringUtils';

import styles from './index.module.scss';

const Card = ({
  player: {
    person_id,
    first_name,
    last_name,
    jersey_number,
    position_full,
    height_ft,
    height_in,
    weight_lbs,
    teamColor,
  },
  playerTeamId,
  isSticky,
  isAnimated,
}) => (
  <>
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={formatPlayerPhotoUrl(playerTeamId, person_id)}
          alt='player headshot'
          onError={(e) => (e.target.src = placeholderImg)}
        />
      </div>
    </div>
    <div
      className={classnames(
        styles.card,
        styles.cardWrapper,
        isSticky && styles.borderBottom
      )}
    >
      <div style={{ borderColor: teamColor }} className={styles.imageLine} />
      <div className={styles.detailsContainer}>
        <div className={styles.infoContainer}>
          <div
            className={classnames(
              styles.thumb,
              isAnimated && styles.transition,
              isSticky && styles.animate
            )}
          >
            <img
              src={formatPlayerPhotoUrl(playerTeamId, person_id)}
              alt='player headshot'
              onError={(e) => (e.target.src = placeholderImg)}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.playerName}>
              {first_name} {last_name}
            </div>
            <div className={styles.playerPosition}>{position_full}</div>
            <div className={styles.playerDetails}>
              {height_ft}' {height_in}, {weight_lbs} lbs
            </div>
          </div>
        </div>
        <div style={{ color: teamColor }} className={styles.playerNumber}>
          {jersey_number}
        </div>
      </div>
    </div>
  </>
);

export default Card;
