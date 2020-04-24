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
            selectedTeamName: null, 
            selectedTeamTricode: null,
            // NOTE: when the teams are mapped, the raptors are index 27, hence the default number
            selectedTeam: 27
        }  
    }

    componentDidMount() {
        this.props.getTeams();
    }

    onSelectChange = (e) => {
        const { teams, getSelectedTeam } = this.props;

        this.setState({ 
            selectedTeamName: teams[e.target.value].ttsName, 
            selectedTeamTricode: teams[e.target.value].tricode,
            selectedTeam: e.target.value, 
        });

        getSelectedTeam(teams[e.target.value]);
    }

    render() {
        const { selectedTeamTricode, selectedTeam } = this.state;
        const { teams, selectedTeamColor } = this.props;

        // NOTE: I've used some in-line styling to access the 'selected team color' variable

        return (
            <div className={styles.headerContainer}>
                <div className={styles.team} style={{backgroundColor: `${selectedTeamColor}`}}>
                    <button className={styles.logoContainer}>
                        <div className={styles.imgContainer}>
                           <img 
                                src={selectedTeamTricode ? 
                                    `https://cdn.nba.net/assets/logos/teams/secondary/web/${selectedTeamTricode}.svg` :
                                    `https://cdn.nba.net/assets/logos/teams/secondary/web/TOR.svg`
                                } 
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
                                {teams.map((team, i) => {
                                    return <option key={i} value={i}>{team.ttsName}</option>;
                                })}
                            </select>
                        </div>
                    </button>
                    <div style={{ 
                            borderStyle: 'solid', 
                            borderWidth: '45px 20px 0 0', 
                            borderColor: selectedTeamColor ? `${selectedTeamColor} transparent transparent transparent` :
                            `#f5f5f5 transparent transparent transparent`,
                            position: 'absolute',
                            left: '100%',
                            zIndex: 99,
                        }}
                        
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
    }
}

const mapStateToProps = (state) => {
    return { 
        teams: state.teams, 
        selectedTeam: state.selectedTeam, 
        selectedTeamColor: state.selectedTeamColor 
    };
}

export default connect(mapStateToProps, { getTeams, getSelectedTeam })(Header);