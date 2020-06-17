import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getTeams } from 'actions/actions';

import DropdownMenu from './dropdownMenu';
import UserLogin from './userLogin';
import NavMenu from './navMenu';

import styles from './index.module.scss';

class Header extends React.Component {
  componentDidMount() {
    const { history, getTeams } = this.props;

    getTeams(history);
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

const mapStateToProps = (state) => {
  return {
    selectedTeam: state.selectedTeam,
    player: state.player,
  };
};

export default connect(mapStateToProps, { getTeams })(withRouter(Header));
