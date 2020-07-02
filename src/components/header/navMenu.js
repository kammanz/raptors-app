import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './navMenu.module.scss';

const NavMenu = ({
  history: {
    location: { pathname },
  },
  selectedTeam: { teamColor, urlName },
  playerId,
}) => {
  const activeBorder = {
    borderBottom: `4px solid ${teamColor}`,
  };

  const getActiveStyle = (path) => (pathname.indexOf(path) >= 0 ? activeBorder : null);

  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <NavLink
          to={playerId ? `/${urlName}/players/${playerId}` : `/${urlName}/players`}
          activeStyle={{ color: teamColor }}>
          Players
          <div className={styles.navLink} style={getActiveStyle('/players')} />
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <NavLink to={`/${urlName}/standings`} activeStyle={{ color: teamColor }}>
          Standings
          <div className={styles.navLink} style={getActiveStyle('/standings')} />
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <NavLink to={`/${urlName}/games`} activeStyle={{ color: teamColor }}>
          Games
          <div className={styles.navLink} style={getActiveStyle('/games')} />
        </NavLink>
      </div>
    </div>
  );
};

NavMenu.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  selectedTeam: PropTypes.shape({
    teamColor: PropTypes.string,
    urlName: PropTypes.string,
  }).isRequired,
  playerId: PropTypes.string,
};

NavMenu.defaultProps = {
  playerId: null,
};

export default withRouter(NavMenu);
