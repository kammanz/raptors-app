import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navMenu.module.scss';

const NavMenu = ({ teamColor }) => {
  const activeStyle = {
    color: teamColor,
    borderBottom: `4px solid ${teamColor}`,
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
