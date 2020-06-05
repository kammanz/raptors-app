import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navMenu.module.scss';

const NavMenu = ({ selectedTeamColor }) => {
  const activeStyle = {
    color: selectedTeamColor,
    borderBottom: `4px solid ${selectedTeamColor}`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Players
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <NavLink to="/standings" activeStyle={activeStyle}>
          Standings
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <NavLink to="/games" activeStyle={activeStyle}>
          Games
        </NavLink>
      </div>
    </div>
  );
};

export default NavMenu;
