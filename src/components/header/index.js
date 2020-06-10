import React from 'react';
import { connect } from 'react-redux';

import { getTeams, getSelectedTeam } from 'actions/actions';

import DropdownMenu from './dropdownMenu';
import UserLogin from './userLogin';
import NavMenu from './navMenu';

import styles from './index.module.scss';

class Header extends React.Component {
  componentDidMount() {
    this.props.getTeams();
  }

  render() {
    const { teamColor } = this.props.selectedTeam;
    return (
      <div className={styles.container}>
        <DropdownMenu />
        <NavMenu teamColor={teamColor} />
        <UserLogin />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTeam: state.selectedTeam,
  };
};

export default connect(mapStateToProps, { getTeams, getSelectedTeam })(Header);
