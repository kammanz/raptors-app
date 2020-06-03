import React from "react";
import { connect } from "react-redux";

import { getTeams, getSelectedTeam } from "actions/actions";
import { COLORS } from "enums";
import bell from "assets/icons/notification-bell.svg";
import dropdownWhite from "assets/icons/dropdownWhite.svg";
import settingsIcon from "assets/icons/settings-icon.svg";
import kobe from "assets/imgs/kobe.png";

import DropdownMenu from "./dropdownMenu";
import NavMenu from "./navMenu";
import styles from "./index.module.scss";

class Header extends React.Component {
  componentDidMount() {
    this.props.getTeams();
  }

  render() {
    const {
      teams,
      selectedTeamColor,
      selectedTeam: { teamId: selectedTeamId },
    } = this.props;
    const dropdownIndicator = () => (
      <img src={dropdownWhite} alt="dropdown arrow" />
    );

    return (
      <div className={styles.container}>
        <div
          className={styles.teamContainer}
          style={{ backgroundColor: selectedTeamColor }}
        >
          <DropdownMenu teams={teams} selectedTeamId={selectedTeamId} />
          <div
            style={{
              borderColor: `${
                selectedTeamColor || COLORS.LIGHT_GREY
              } transparent transparent transparent`,
            }}
            className={styles.borderTriangle}
          />
        </div>

        <NavMenu selectedTeamColor={selectedTeamColor} />

        <div className={styles.userContainer}>
          <button>
            <img src={bell} alt="notification bell" />
          </button>
          <button>
            <img src={settingsIcon} alt="settings icon" />
          </button>
          <button>
            <img
              src={kobe}
              alt="user avatar"
              height="25"
              className={styles.userPic}
            />
            <div>Kobe Bryant</div>
            <i className={styles.dropDownUser} />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    selectedTeam: state.selectedTeam,
    selectedTeamColor: state.selectedTeamColor,
  };
};

export default connect(mapStateToProps, { getTeams, getSelectedTeam })(Header);
