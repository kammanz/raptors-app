import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTeams } from '../actions/actions.js';

import raptorsLogo from '../assets/icons/raptors-logo.svg';
import bell from '../assets/icons/notification-bell.svg';
import settingsIcon from '../assets/icons/settings-icon.svg';
import kobe from '../assets/imgs/kobe.png';

import styles from './header.module.scss';

class Header extends React.Component {
    componentDidMount() {
        this.props.getTeams();
    };

    render() {
        return (
            <div className={styles.headerContainer}>
                <div className={styles.team}>
                    <button className={styles.logoContainer}>
                        <img src={raptorsLogo} title="raptors logo" alt="raptors logo" />
                        <span>Toronto Raptors</span>
                        <i className={styles.dropDownTeam} />
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
                        <img src={bell} alt="notification-bell" />
                    </button>
                    <button>
                        <img src={settingsIcon} alt="settings-icon" />
                    </button>
                    <button>
                        <img src={kobe} alt="user-pic" className={styles.userPic} />
                        <div>Kobe Bryant</div>
                        <i className={styles.dropDownUser} />
                    </button>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { teams: state.teams };
};

export default connect(mapStateToProps, { getTeams })(Header);