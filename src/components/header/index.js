import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getTeams } from 'actions';

import DropdownMenu from './dropdownMenu';
import UserLogin from './userLogin';
import NavMenu from './navMenu';

import styles from './index.module.scss';

const Header = ({
  getTeams,
  history,
  location: { pathname },
  player: {
    details: { person_id },
  },
  selectedTeam,
}) => {
  const getTeamsCallback = () => {
    getTeams(pathname, history);
  };
  useEffect(getTeamsCallback, []);

  return (
    <div className={styles.container}>
      <DropdownMenu />
      <NavMenu selectedTeam={selectedTeam} playerId={parseInt(person_id)} />
      <UserLogin />
    </div>
  );
};

const mapStateToProps = ({ teams: { selectedTeam }, player }) => {
  return {
    selectedTeam,
    player,
  };
};

Header.propTypes = {
  getTeams: PropTypes.func,
  history: PropTypes.object,
  pathname: PropTypes.string,
  person_id: PropTypes.number,
  player: PropTypes.object,
  playerId: PropTypes.number,
  selectedTeam: PropTypes.object,
};

export default connect(mapStateToProps, { getTeams })(withRouter(Header));
