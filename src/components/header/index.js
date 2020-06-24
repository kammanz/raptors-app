import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getTeams } from 'actions';

import DropdownMenu from './dropdownMenu';
import UserLogin from './userLogin';
import NavMenu from './navMenu';

import styles from './index.module.scss';

class Header extends React.Component {
  componentDidMount() {
    const {
      history,
      location: { pathname },
      getTeams,
    } = this.props;

    getTeams(pathname, history);
  }

  render() {
    const {
      selectedTeam,
      player: {
        details: { person_id },
      },
    } = this.props;

    return (
      <div className={styles.container}>
        <DropdownMenu />
        <NavMenu selectedTeam={selectedTeam} playerId={person_id} />
        <UserLogin />
      </div>
    );
  }
}

const mapStateToProps = ({ teams: { selectedTeam }, player }) => {
  return {
    selectedTeam,
    player,
  };
};

export default connect(mapStateToProps, { getTeams })(withRouter(Header));
