import React from 'react';
import { connect } from 'react-redux';

import { getTeams, getSelectedTeam } from '../../actions/actions.js';

import NavMenu from './navMenu';

import bell from '../../assets/icons/notification-bell.svg';
import settingsIcon from '../../assets/icons/settings-icon.svg';
import kobe from '../../assets/imgs/kobe.png';

import styles from './index.module.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            selectedTeamTricode: 'TOR', // toronto raptors default tricode
            selectedTeam: 1610612761 // toronto raptors default team id  
        };  
    };

    componentDidMount() {
        this.props.getTeams();
    };

    onSelectChange = e => {
        const { teams, getSelectedTeam } = this.props;
        const selectedTeam =  teams.filter(team => team.teamId === e.target.value).pop();

        this.setState({ 
            selectedTeamName: selectedTeam.ttsName, 
            selectedTeamTricode: selectedTeam.tricode,
            selectedTeam: e.target.value, 
        });

        getSelectedTeam(selectedTeam);
    };

    render() {
        const { selectedTeamTricode, selectedTeam } = this.state;
        const { teams, selectedTeamColor } = this.props;

        // Used in-line styling to access the 'selected team color' variable when necessary
        return (
            <div className={styles.container}>
                <div className={styles.team} style={{backgroundColor: `${selectedTeamColor}`}}>
                    <div className={styles.logoContainer}>
                        <div className={styles.imgContainer}>
                           <img 
                                src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${selectedTeamTricode}.svg`} 
                                title="team logo" 
                                alt="team logo"
                            /> 
                        </div>
                        <div className={styles.selectContainer}>
                            <select 
                                value={selectedTeam} 
                                onChange={this.onSelectChange} 
                                style={{ backgroundColor: `${selectedTeamColor}`}}
                            >
                                {teams.map((team) => {
                                    return <option key={team.teamId} value={team.teamId}>{team.ttsName}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                    <div 
                        style={{ borderColor: `${selectedTeamColor || '#f5f5f5'} transparent transparent transparent` }}
                        className={styles.borderTriangle}
                    />
                </div>

                <NavMenu selectedTeamColor={selectedTeamColor} />
                
                <div className={styles.user}>
                    <button>
                        <img src={bell} alt="notification bell"></img>
                    </button>
                    <button>
                        <img src={settingsIcon} alt="settings icon"></img>
                    </button>
                    <button>
                        <img src={kobe} alt="user avatar" height="25" className={styles.userPic}></img>
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
        selectedTeamColor: state.selectedTeamColor 
    };
};

export default connect(mapStateToProps, { getTeams, getSelectedTeam })(Header);