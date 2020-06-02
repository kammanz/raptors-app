import React from 'react';
import { connect } from 'react-redux';
import Select, { components } from 'react-select';
import classnames from 'classnames';

import { getTeams, getSelectedTeam } from '../../actions/actions.js';
import { TEAMS, COLORS } from '../../enums';
import { selectMenuStyles } from 'utils/objectUtils';

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
            selectedTeamTricode: TEAMS.TOR.TRI_CODE,
            selectedTeamId: TEAMS.TOR.ID,
        };
    };

    componentDidMount() {
        this.props.getTeams();
    };

    onSelectChange = (e) => {
        const { getSelectedTeam } = this.props;

        this.setState({
            selectedTeamTricode: e.tricode,
            selectedTeamId: e.teamId,
        });

        getSelectedTeam(e);
    };

    render() {
        const { selectedTeamTricode, selectedTeamId } = this.state;
        const { teams, selectedTeamColor } = this.props;
        const DropdownIndicator = () => <img src={dropdownWhite} />;

        const CustomOption = ( props ) => {
            const { data, innerRef, innerProps } = props;
            console.log(props.data.primaryColor);

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

        const CustomPlaceholder = ( props ) => {
            const { data, innerRef, innerProps } = props.data;
            console.log(props);
            // console.log('props.data', props.data);

            return (
                <div ref={innerRef} {...innerProps} style={{ backgroundColor: `pink`}} className={styles.optionContainer}>
                    <div className={styles.optionImgContainer}>
                         <img
                            src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${props.data.tricode}.svg`}
                            title='team logo'
                            alt='team logo'
                            className={styles.optionImage}
                        />
                    </div>
                   
                    <div className={styles.optionTitle}>{props.data.ttsName}</div>
                </div>
            );
        };

        return (
            <div className={styles.container}>
                <div className={styles.teamContainer} style={{backgroundColor: `${selectedTeamColor}`}}>
                    <div className={styles.selectContainer}>
                        <Select 
                            options={teams}
                            getOptionValue={option => option.ttsName}
                            // getOptionLabel={team =>
                            //     `${team.ttsName}`
                            // }
                            onChange={e => this.onSelectChange(e)}
                            styles={selectMenuStyles()}
                            components={{ DropdownIndicator, Option: CustomOption, SingleValue: CustomOption }}
                            value={teams.find(team => team.teamId === selectedTeamId)}
                            isSearchable={false}
                        />
                    </div>
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
