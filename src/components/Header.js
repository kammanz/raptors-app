import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectedTeam } from '../actions/actions.js';

import raptorsLogo from '../assets/icons/raptors-logo.svg';
import bell from '../assets/icons/notification-bell.svg';
import settingsIcon from '../assets/icons/settings-icon.svg';
import kobe from '../assets/imgs/kobe.png';

import styles from './header.module.scss';

class Header extends React.Component {
    // console.log(styles, 'styles');
    // this.props.selectedTeam();
    // console.log(props.selectedTeam());

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.props.selectedTeam();
    }

    render() {
        console.log(this.props);

        return (
            <div className="header-container">
                <div className="team">
                    <button 
                        className="logo-container"
                    
                        >
                        <img src={raptorsLogo} title="raptors logo" alt="raptors logo"></img>
                        <span className={styles.redStuff}>Toronto Raptors</span>
                        <i className="drop-down-team" />
                    </button>
                </div>
    
                <div className="links">
                    <div className="link-container">
                        <NavLink to='/' exact >Players</NavLink>
                    </div>
                    <div className="link-container">
                        <NavLink to='/standings'>Standings</NavLink>
                    </div>
                    <div className="link-container">
                        <NavLink to='/games'>Games</NavLink>
                    </div>
                </div>
                
                <div className="user">
                    <button>
                        <img src={bell} alt="notification-bell"></img>
                    </button>
                    <button>
                        <img src={settingsIcon} alt="settings-icon"></img>
                    </button>
                    <button>
                        <img src={kobe} alt="user-pic" height="25" className="user-pic"></img>
                        <div>Kobe Bryant</div>
                        <i className="drop-down-user"></i>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { selectedTeam: state.selectedTeam };
}

export default connect(mapStateToProps,
    { 
        selectedTeam,
    }
)(Header);