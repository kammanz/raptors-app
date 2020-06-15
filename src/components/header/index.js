import React from 'react';
import { connect } from 'react-redux';

import { getTeams } from 'actions/actions';

import DropdownMenu from './dropdownMenu';
import UserLogin from './userLogin';
import NavMenu from './navMenu';

import styles from './index.module.scss';

class Header extends React.Component {
  componentDidMount() {
    this.props.getTeams();
  }

  render() {
    return (
      <div className={styles.container}>
        <DropdownMenu />
        <NavMenu selectedTeam={this.props.selectedTeam} />
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

export default connect(mapStateToProps, { getTeams })(Header);
