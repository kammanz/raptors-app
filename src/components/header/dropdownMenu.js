import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import classnames from 'classnames';

import { getTeams, getSelectedTeam } from 'actions/actions';
import { COLORS, TEAMS } from 'enums';
import dropdownWhite from 'assets/icons/dropdownWhite.svg';

import selectMenuStyles from './selectMenuStyles';
import styles from './dropdownMenu.module.scss';

const DropdownMenu = ({ teams, selectedTeam, selectedTeamColor, getSelectedTeam }) => {
  const { teamId: selectedTeamId } = selectedTeam;

  const teamsArray = Object.values(TEAMS);

  const teamLogo = teamsArray.map((obj, i) => {
    if (obj.TRI_CODE === selectedTeam.tricode) {
      return <div key={obj.TRI_CODE}>{obj.LOGO}</div>;
    }
  });

  const dropdownIndicator = () => <img src={dropdownWhite} alt="dropdown arrow" />;

  const customValue = (props) => {
    const {
      data: { primaryColor, ttsName, tricode },
      innerRef,
      innerProps,
    } = props;

    return (
      <div
        style={{ backgroundColor: primaryColor, borderTop: 'none' }}
        className={styles.optionContainer}
        ref={innerRef}
        {...innerProps}>
        <div className={styles.optionImgContainer}>{teamLogo}</div>
        <div className={styles.optionTitle}>{ttsName}</div>
      </div>
    );
  };

  const customOption = (props) => {
    const {
      data: { primaryColor, ttsName, tricode, teamId },
      innerRef,
      innerProps,
    } = props;
    const isSelected = selectedTeamId === teamId;

    return (
      !isSelected && (
        <div
          style={{ backgroundColor: primaryColor }}
          className={classnames(styles.optionContainer, isSelected && styles.displayNone)}
          ref={innerRef}
          {...innerProps}>
          <div className={styles.optionImgContainer}>
            <img
              src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${tricode}.svg`}
              title="team logo"
              alt="team logo"
              className={styles.optionImage}
            />
          </div>
          <div className={styles.optionTitle}>{ttsName}</div>
        </div>
      )
    );
  };

  return (
    <div style={{ backgroundColor: selectedTeamColor }} className={styles.teamContainer}>
      <Select
        styles={selectMenuStyles()}
        options={teams}
        value={teams.find((team) => team.teamId === selectedTeamId)}
        isSearchable={false}
        placeholder={false}
        components={{
          DropdownIndicator: dropdownIndicator,
          Option: customOption,
          SingleValue: customValue,
        }}
        onChange={(e) => getSelectedTeam(e)}
      />
      <div
        style={{
          borderColor: `${selectedTeamColor || COLORS.LIGHT_GREY} transparent transparent transparent`,
        }}
        className={styles.borderTriangle}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    selectedTeam: state.selectedTeam,
    selectedTeamColor: state.selectedTeamColor,
  };
};

export default connect(mapStateToProps, { getTeams, getSelectedTeam })(DropdownMenu);
