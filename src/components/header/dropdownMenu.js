import React from "react";
import { connect } from "react-redux"; 
import Select from "react-select";
import classnames from "classnames";
import { getTeams, getSelectedTeam } from "actions/actions";

import dropdownWhite from "assets/icons/dropdownWhite.svg";

import selectMenuStyles from "./selectMenuStyles";
import styles from "./dropdownMenu.module.scss";

const DropdownMenu = ({ teams, selectedTeam, getSelectedTeam }) => {
  const { teamId: selectedTeamId } = selectedTeam;

  const dropdownIndicator = () => (
    <img src={dropdownWhite} alt="dropdown arrow" />
  );

  console.log(dropdownIndicator);

  const customValue = (props) => {
    const {
      data: { primaryColor, ttsName, tricode },
      innerRef,
      innerProps,
    } = props;

    return (
      <div
        ref={innerRef}
        {...innerProps}
        style={{ backgroundColor: primaryColor }}
        className={styles.optionContainer}
      >
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
      <div
        ref={innerRef}
        {...innerProps}
        style={{ backgroundColor: primaryColor }}
        className={classnames(
          styles.optionContainer,
          isSelected && styles.displayNone
        )}
      >
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
    );
  };

  const onSelectChange = (e) => {
    getSelectedTeam(e);
  };

  return (
    <Select
      options={teams}
      onChange={(e) => onSelectChange(e)}
      styles={selectMenuStyles()}
      components={{
        DropdownIndicator: dropdownIndicator,
        Option: customOption,
        SingleValue: customValue,
      }}
      value={teams.find((team) => team.teamId === selectedTeamId)}
      isSearchable={false}
      placeholder={false}
    />
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
