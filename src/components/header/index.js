import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getTeams } from 'actions';

import DropdownMenu from './dropdownMenu';
import UserLogin from './userLogin';
import NavMenu from './navMenu';

import styles from './index.module.scss';

const Header = ({
  history,
  location: { pathname },
  getTeams,
  selectedTeam,
  player: {
    details: { person_id },
  },
}) => {
  const getTeamsCallback = () => {
    getTeams(pathname, history);
  };
  useEffect(getTeamsCallback, []);

  return (
    <div className={styles.container}>
      <DropdownMenu />
      <NavMenu selectedTeam={selectedTeam} playerId={person_id} />
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

export default connect(mapStateToProps, { getTeams })(withRouter(Header));
