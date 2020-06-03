import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import classnames from 'classnames';

import { getTeams, getSelectedTeam } from '../../actions/actions.js';
import { TEAMS, COLORS } from '../../enums';
import selectMenuStyles from './selectMenuStyles';

import NavMenu from './navMenu';

import bell from '../../assets/icons/notification-bell.svg';
import dropdownWhite from '../../assets/icons/dropdownWhite.svg';
import settingsIcon from '../../assets/icons/settings-icon.svg';
import kobe from '../../assets/imgs/kobe.png';

import styles from './index.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTeamId: TEAMS.TOR.ID,
    };
  };

  componentDidMount() {
    this.props.getTeams();
  };

  onSelectChange = (e) => {
    const { getSelectedTeam } = this.props;

    this.setState({
      selectedTeamId: e.teamId,
    });
    getSelectedTeam(e);
  };

  CustomValue = ( props ) => {
    const { data, innerRef, innerProps } = props;

    return (
      <div ref={innerRef} {...innerProps} style={{ backgroundColor: `${props.data.primaryColor}`}} className={styles.optionContainer}>
        <div className={styles.optionImgContainer}>
          <img
            src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${data.tricode}.svg`}
            title='team logo'
            alt='team logo'
            className={styles.optionImage}
          />
        </div>
        <div className={styles.optionTitle}>{data.ttsName}</div>
      </div>
    );
  };

  CustomOption = ( props ) => {
    const { data, innerRef, innerProps } = props;
    const { selectedTeamId } = this.state;
    let isSelected = selectedTeamId === props.data.teamId;

    return (
      <div ref={innerRef} {...innerProps} style={{ backgroundColor: `${props.data.primaryColor}`}} className={classnames(styles.optionContainer, isSelected && styles.isSelected)}>
        <div className={styles.optionImgContainer}>
          <img
            src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${data.tricode}.svg`}
            title='team logo'
            alt='team logo'
            className={styles.optionImage}
          />
        </div>
        <div className={styles.optionTitle}>{data.ttsName}</div>
      </div>
    );
  };

  render() {
    const { selectedTeamId } = this.state;
    const { teams, selectedTeamColor } = this.props;
    const DropdownIndicator = () => <img src={dropdownWhite} alt="dropdown arrow" />;

    return (
      <div className={styles.container}>
        <div className={styles.teamContainer} style={{backgroundColor: `${selectedTeamColor}`}}>
          <Select 
            options={teams}
            getOptionValue={option => option.ttsName}
            onChange={e => this.onSelectChange(e)}
            styles={selectMenuStyles()}
            components={{ DropdownIndicator, Option: this.CustomOption, SingleValue: this.CustomValue }}
            value={teams.find(team => team.teamId === selectedTeamId)}
            isSearchable={false}
            placeholder={false}
            isOptionDisabled={(option) => option.disabled}
          />
          <div
            style={{ borderColor: `${selectedTeamColor || COLORS.LIGHT_GREY} transparent transparent transparent` }}
            className={styles.borderTriangle}
          />
        </div>

        <NavMenu selectedTeamColor={selectedTeamColor} />

        <div className={styles.userContainer}>
          <button>
            <img src={bell} alt='notification bell'></img>
          </button>
          <button>
            <img src={settingsIcon} alt='settings icon'></img>
          </button>
          <button>
            <img src={kobe} alt='user avatar' height='25' className={styles.userPic}></img>
            <div>Kobe Bryant</div>
            <i className={styles.dropDownUser}></i>
          </button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    selectedTeam: state.selectedTeam,
    selectedTeamColor: state.selectedTeamColor,
  };
};

export default connect(mapStateToProps, { getTeams, getSelectedTeam })(Header);
