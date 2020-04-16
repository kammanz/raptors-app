import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Select from 'react-select';
// import Dropdown from './_shared/dropdown';

import { getTeams } from '../actions/actions.js';
import { getTeams2, getSelectedTeam } from '../actions/actions.js';

import raptorsLogo from '../assets/icons/raptors-logo.svg';
import bell from '../assets/icons/notification-bell.svg';
import settingsIcon from '../assets/icons/settings-icon.svg';
import kobe from '../assets/imgs/kobe.png';

import styles from './header.module.scss';
import selectedTeamReducer from '../reducers/getSelectedTeamReducer.js';

class Header extends React.Component {

    constructor(props) {
        super(props);

          this.state={ 
            selectedTeamName: null, 
            selectedTeamTricode: null,
            selectedDefault: 27
        }
    }

    componentDidMount() {
        this.props.getTeams2();
        const raps = this.props.teams.find(team => team.tricode === true);

        // console.log(this.props.teams.filter((team) => team.fullName === "Toronto Raptors"));

        // this.props.getSelectedTeam(this.props.teams[e.target.value]);
    }

    onSelectChange = (e) => {

        // console.log(this.props.teams);
        console.log(this.props.teams[e.target.value]);
        this.setState({ 
            selectedTeamName: this.props.teams[e.target.value].fullName, 
            selectedTeamTricode: this.props.teams[e.target.value].tricode,
            selectedDefault: e.target.value, 
        });
        this.props.getSelectedTeam(this.props.teams[e.target.value]);
        
    }

    render() {

        const { selectedTeamName, selectedTeamTricode } = this.state;
        const { teams } = this.props;
        const { selectedTeam } = this.props;
        console.log(this.state.selectedDefault, 'yuk');

        return (
            <div className={styles.headerContainer}>
                <div className={styles.team}>
                    <button onClick={this.onButtonClick} className={styles.logoContainer}>
                        <img 
                             src={selectedTeamTricode ? 
                                    `https://cdn.nba.net/assets/logos/teams/secondary/web/${selectedTeamTricode}.svg` :
                                    `https://cdn.nba.net/assets/logos/teams/secondary/web/TOR.svg`
                             } title="raptors logo" alt="raptors logo"
                        />
                        <select value={this.state.selectedDefault} /*placeholder={selectedTeam.fullName}*/ onChange={this.onSelectChange} >
                                {teams.map((team, i) => {
                                    return <option key={i} value={i}>{team.urlName}</option>;
                                })}
                        </select>
                    </button>
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
    return { teams: state.teams2, selectedTeam: state.selectedTeam };
}

// we always export default the connect. the connect is one curried function and we only export one function
export default connect(mapStateToProps, { getTeams, getTeams2, getSelectedTeam })(Header);