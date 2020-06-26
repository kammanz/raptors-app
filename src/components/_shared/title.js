import React from 'react';
import PropTypes from 'prop-types';

import styles from './title.module.scss';

const Title = ({ title, section, teamColor }) => {
  return (
    <div style={{ backgroundColor: teamColor }} className={section === 'games' ? styles.gameStats : styles.totalStats}>
      {title}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  section: PropTypes.string,
  teamColor: PropTypes.string,
};

export default Title;
