import React from "react";
import { connect } from "react-redux";

import { getTeams, getSelectedTeam } from "actions/actions";

import DropdownMenu from "./dropdownMenu";
import UserLogin from "./userLogin";

import NavMenu from "./navMenu";
import styles from "./index.module.scss";

class Header extends React.Component {
  componentDidMount() {
    this.props.getTeams();
  }

  render() {
    const {
      selectedTeamColor,
    } = this.props;

    return (
      <div className={styles.container}>
        <DropdownMenu />
        <NavMenu selectedTeamColor={selectedTeamColor} />
        <UserLogin />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTeamColor: state.selectedTeamColor,
  };
};

export default connect(mapStateToProps, { getTeams, getSelectedTeam })(Header);
