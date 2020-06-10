import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import { getTeams, getSelectedTeam } from 'actions/actions';

import * as Logos from 'assets/icons/logos';
import Chevron from 'assets/icons/chevron';

import selectMenuStyles from './selectMenuStyles';
import styles from './dropdownMenu.module.scss';

const DropdownMenu = ({ teams, selectedTeam, getSelectedTeam }) => {
  const { teamId: selectedTeamId, teamColor } = selectedTeam;
  const chevron = () => <Chevron color={'white'} />;

  const customValue = (props) => {
    const {
      data: { teamColor, fullName, tricode },
      innerProps,
    } = props;

    const TeamLogo = Logos[tricode];

    return (
      <div style={{ backgroundColor: teamColor, borderTop: 'none' }} className={styles.optionContainer} {...innerProps}>
        <div className={styles.optionImgContainer}>
          <TeamLogo />
        </div>
        <div className={styles.optionTitle}>{fullName}</div>
      </div>
    );
  };

  const customOption = (props) => {
    const {
      data: { teamColor, fullName, tricode, teamId },
      innerProps,
    } = props;
    const TeamLogo = Logos[tricode];
    const isSelected = selectedTeamId === teamId;

    return (
      !isSelected && (
        <div style={{ backgroundColor: teamColor.color }} className={styles.optionContainer} {...innerProps}>
          <div className={styles.optionImgContainer}>
            <TeamLogo />
          </div>
          <div className={styles.optionTitle}>{fullName}</div>
        </div>
      )
    );
  };

  return (
    <div style={{ backgroundColor: teamColor }} className={styles.teamContainer}>
      <Select
        styles={selectMenuStyles()}
        options={teams}
        value={teams.find((team) => team.teamId === selectedTeamId)}
        isSearchable={false}
        placeholder={false}
        components={{
          DropdownIndicator: chevron,
          Option: customOption,
          SingleValue: customValue,
        }}
        onChange={(e) => getSelectedTeam(e)}
      />
      <div
        style={{
          borderColor: `${teamColor} transparent transparent transparent`,
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
  };
};

export default connect(mapStateToProps, { getTeams, getSelectedTeam })(DropdownMenu);
