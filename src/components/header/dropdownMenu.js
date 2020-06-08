import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import { getTeams, getSelectedTeam } from 'actions/actions';
import { COLORS /*TEAMS*/ } from 'enums';

import * as teamLogo from 'assets/logos';
import dropdownWhite from 'assets/icons/dropdownWhite.svg';

import selectMenuStyles from './selectMenuStyles';
import styles from './dropdownMenu.module.scss';

const DropdownMenu = ({ teams, selectedTeam, selectedTeamColor, getSelectedTeam }) => {
  const { teamId: selectedTeamId } = selectedTeam;

  // const teamsArray = Object.values(TEAMS);

  const dropdownIndicator = () => <img src={dropdownWhite} alt="dropdown arrow" />;

  const customValue = (props) => {
    const {
      data: { primaryColor, ttsName, tricode },
      innerRef,
      innerProps,
    } = props;

    const TeamLogoConverted = teamLogo[tricode];

    return (
      <div
        style={{ backgroundColor: primaryColor, borderTop: 'none' }}
        className={styles.optionContainer}
        ref={innerRef}
        {...innerProps}>
        <div className={styles.optionImgContainer}>
          <TeamLogoConverted />
        </div>
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

    const TeamLogoConverted = teamLogo[tricode];

    const isSelected = selectedTeamId === teamId;

    return (
      !isSelected && (
        <div
          style={{ backgroundColor: primaryColor }}
          className={styles.optionContainer}
          ref={innerRef}
          {...innerProps}>
          <div className={styles.optionImgContainer}>
            <TeamLogoConverted />
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
