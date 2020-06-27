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
    position: 'absolute',
    width: 'calc(100% - 40px)',
    left: '20px',
    bottom: '0',
    borderBottom: `4px solid ${teamColor}`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <NavLink
          to={playerId ? `/${urlName}/players/${playerId}` : `/${urlName}/players`}
          activeStyle={{ color: teamColor }}>
          Players
          <div style={pathname.indexOf('/players') >= 0 ? activeBorder : null} />
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <NavLink to={`/${urlName}/standings`} activeStyle={{ color: teamColor }}>
          Standings
          <div style={pathname.indexOf('/standings') >= 0 ? activeBorder : null} />
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <NavLink to={`/${urlName}/games`} activeStyle={{ color: teamColor }}>
          Games
          <div style={pathname.indexOf('/games') >= 0 ? activeBorder : null} />
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
