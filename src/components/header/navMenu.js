import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './navMenu.module.scss';

const NavMenu = ({ selectedTeam: { teamColor, urlName }, playerId }) => {
  const activeStyle = {
    color: teamColor,
    borderBottom: `4px solid ${teamColor}`,
  };
  console.log(teamColor, urlName);

  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <NavLink to={playerId ? `/${urlName}/players/${playerId}` : `/${urlName}/players`} activeStyle={activeStyle}>
          Players
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <NavLink to={`/${urlName}/standings`} activeStyle={activeStyle}>
          Standings
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <NavLink to={`/${urlName}/games`} activeStyle={activeStyle}>
          Games
        </NavLink>
      </div>
    </div>
  );
};

NavMenu.propTypes = {
  selectedTeam: PropTypes.shape({
    teamColor: PropTypes.string,
    urlName: PropTypes.string,
  }).isRequired,
  playerId: PropTypes.string,
};

NavMenu.defaultProps = {
  playerId: null,
};
export default NavMenu;
