import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import classnames from 'classnames';

import { getTeams, getSelectedTeam } from 'actions/actions';
import { COLORS } from 'enums';
import bell from 'assets/icons/notification-bell.svg';
import dropdownWhite from 'assets/icons/dropdownWhite.svg';
import settingsIcon from 'assets/icons/settings-icon.svg';
import kobe from 'assets/imgs/kobe.png';

import NavMenu from './navMenu';
import selectMenuStyles from './selectMenuStyles';
import styles from './index.module.scss';

class Header extends React.Component {
  componentDidMount() {
    this.props.getTeams();
  }

  onSelectChange = (e) => {
    this.props.getSelectedTeam(e);
  };

  CustomValue = (props) => {
    const {
      data: { primaryColor, ttsName, tricode },
      innerRef,
      innerProps,
    } = props;

    return (
      <div
        ref={innerRef}
        {...innerProps}
        style={{ backgroundColor: `${primaryColor}` }}
        className={styles.optionContainer}
      >
        <div className={styles.optionImgContainer}>
          <img
            src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${tricode}.svg`}
            title='team logo'
            alt='team logo'
            className={styles.optionImage}
          />
        </div>
        <div className={styles.optionTitle}>{ttsName}</div>
      </div>
    );
  };

  CustomOption = (props) => {
    const {
      data: { primaryColor, ttsName, tricode, teamId },
      innerRef,
      innerProps,
    } = props;
    const { selectedTeam } = this.props;
    let isSelected = selectedTeam.teamId === teamId;

    return (
      <div
        ref={innerRef}
        {...innerProps}
        style={{ backgroundColor: `${primaryColor}` }}
        className={classnames(
          styles.optionContainer,
          isSelected && styles.displayNone
        )}
      >
        <div className={styles.optionImgContainer}>
          <img
            src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${tricode}.svg`}
            title='team logo'
            alt='team logo'
            className={styles.optionImage}
          />
        </div>
        <div className={styles.optionTitle}>{ttsName}</div>
      </div>
    );
  };

  render() {
    const {
      teams,
      selectedTeamColor,
      selectedTeam: { teamId: selectedTeamId },
    } = this.props;
    const DropdownIndicator = () => (
      <img src={dropdownWhite} alt='dropdown arrow' />
    );

    return (
      <div className={styles.container}>
        <div
          className={styles.teamContainer}
          style={{ backgroundColor: `${selectedTeamColor}` }}
        >
          <Select
            options={teams}
            onChange={(e) => this.onSelectChange(e)}
            styles={selectMenuStyles()}
            components={{
              DropdownIndicator,
              Option: this.CustomOption,
              SingleValue: this.CustomValue,
            }}
            value={teams.find((team) => team.teamId === selectedTeamId)}
            isSearchable={false}
            placeholder={false}
          />
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
            <img src={bell} alt='notification bell' />
          </button>
          <button>
            <img src={settingsIcon} alt='settings icon' />
          </button>
          <button>
            <img
              src={kobe}
              alt='user avatar'
              height='25'
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
