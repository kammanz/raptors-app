import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import { getTeams, getSelectedTeam } from 'actions/actions';
import { COLORS } from 'enums';

import * as Logos from 'assets/logos';
import Chevron from 'assets/icons/chevron';

import selectMenuStyles from './selectMenuStyles';
import styles from './dropdownMenu.module.scss';

const DropdownMenu = ({ teams, selectedTeam, selectedTeamColor, getSelectedTeam }) => {
  const { teamId: selectedTeamId } = selectedTeam;

  console.log('right here', teams);

  const chevron = () => <Chevron color={'white'} />;

  const customValue = (props) => {
    const {
      data: { primaryColor, fullName, tricode },
      innerProps,
    } = props;

    const TeamLogo = Logos[tricode];

    return (
      <div
        style={{ backgroundColor: primaryColor, borderTop: 'none' }}
        className={styles.optionContainer}
        {...innerProps}>
        <div className={styles.optionImgContainer}>
          <TeamLogo />
        </div>
        <div className={styles.optionTitle}>{fullName}</div>
      </div>
    );
  };

  const customOption = (props) => {
    const {
      data: { primaryColor, fullName, tricode, teamId },
      innerProps,
    } = props;

    const TeamLogo = Logos[tricode];

    const isSelected = selectedTeamId === teamId;

    return (
      !isSelected && (
        <div style={{ backgroundColor: primaryColor }} className={styles.optionContainer} {...innerProps}>
          <div className={styles.optionImgContainer}>
            <TeamLogo />
          </div>
          <div className={styles.optionTitle}>{fullName}</div>
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
          DropdownIndicator: chevron,
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
