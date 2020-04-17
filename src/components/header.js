import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Select from 'react-select';
// import Dropdown from './_shared/dropdown';

import { getTeamsConfig } from '../actions/actions.js';
import { getTeamsConfig2, getSelectedTeam } from '../actions/actions.js';

import raptorsLogo from '../assets/icons/raptors-logo.svg';
import bell from '../assets/icons/notification-bell.svg';
import settingsIcon from '../assets/icons/settings-icon.svg';
import kobe from '../assets/imgs/kobe.png';

import styles from './header.module.scss';
import primaryColor from '../../src/scss/variables.scss';
// import varStyles from '../scss/variables';
import selectedTeamReducer from '../reducers/getSelectedTeamReducer.js';

class Header extends React.Component {

    constructor(props) {
        super(props);

          this.state={ 
            selectedTeamName: null, 
            selectedTeamTricode: null,
            selectedTeam: 27
        }        
    }

    componentDidMount() {
        this.props.getTeamsConfig();
    }

    onSelectChange = (e) => {
        this.setState({ 
            selectedTeamName: this.props.teamsConfig[e.target.value].ttsName, 
            selectedTeamTricode: this.props.teamsConfig[e.target.value].tricode,
            selectedTeam: e.target.value, 
        });

        this.props.getSelectedTeam(this.props.teamsConfig[e.target.value]);
    }

    render() {
        const { selectedTeamTricode } = this.state;
        const { teamsConfig, selectedTeamColor } = this.props;

        return (
            <div className={styles.headerContainer}>
                <div className={`${styles.team} ${styles.primeColor}`}  style={{backgroundColor: `${selectedTeamColor}`}}>
                    <button onClick={this.onButtonClick} className={styles.logoContainer}>
                        <img 
                             src={selectedTeamTricode ? 
                                    `https://cdn.nba.net/assets/logos/teams/secondary/web/${selectedTeamTricode}.svg` :
                                    `https://cdn.nba.net/assets/logos/teams/secondary/web/TOR.svg`
                             } title="raptors logo" alt="raptors logo"
                        />
                        <select value={this.state.selectedTeam} onChange={this.onSelectChange} >
                                {teamsConfig.map((team, i) => {
                                    return <option key={i} value={i}>{team.ttsName}</option>;
                                })}
                        </select>
                    </button>
                    <div
                        // NOTE: in-line style to access team color variable  
                        style={{ 
                        width: 0, 
                        height: 0, 
                        borderStyle: 'solid', 
                        borderWidth: '45px 20px 0 0', 
                        borderColor: `${selectedTeamColor} transparent transparent transparent`,
                        position: 'absolute',
                        left: '100%',
                        zIndex: 1
                        }} 
                    />
                </div>
    
                <div className={styles.links}>
                    <div className={styles.linkContainer}>
                        <NavLink to='/' exact activeClassName={styles.active}>Players</NavLink>
                    </div>
                    <div className={styles.linkContainer}>
                        <NavLink to='/standings' activeClassName={styles.active}>Standings</NavLink>
                    </div>
                    <div className={styles.linkContainer}>
                        <NavLink to='/games' activeClassName={styles.active}>Games</NavLink>
                    </div>
                </div>
                
                <div className={styles.user}>
                    <button>
                        <img src={bell} alt="notification-bell"></img>
                    </button>
                    <button>
                        <img src={settingsIcon} alt="settings-icon"></img>
                    </button>
                    <button>
                        <img src={kobe} alt="user-pic" height="25" className={styles.userPic}></img>
                        <div>Kobe Bryant</div>
                        <i className={styles.dropDownUser}></i>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { teamsConfig: state.teamsConfig, selectedTeam: state.selectedTeam, selectedTeamColor: state.selectedTeamColor };
}

export default connect(mapStateToProps, { getTeamsConfig, getTeamsConfig2, getSelectedTeam })(Header);