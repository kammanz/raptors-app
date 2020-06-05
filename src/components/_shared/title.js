import React from 'react';

import styles from './title.module.scss';

const Title = ({ title, section, teamColor }) => {
  return (
<<<<<<< HEAD
    <div
      style={{ backgroundColor: teamColor }}
      className={section === 'games' ? styles.gameStats : styles.totalStats}
    >
=======
    <div style={{ backgroundColor: teamColor }} className={section === 'games' ? styles.gameStats : styles.totalStats}>
>>>>>>> master
      {title}
    </div>
  );
};

export default Title;
