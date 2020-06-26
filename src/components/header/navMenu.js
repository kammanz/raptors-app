import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navMenu.module.scss';

const NavMenu = ({ selectedTeam: { teamColor, urlName }, playerId }) => {
  const activeStyle = {
    color: teamColor,
    borderBottom: `4px solid ${teamColor}`,
  };

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

export default NavMenu;
