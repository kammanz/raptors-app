import React from 'react';
import { NavLink } from 'react-router-dom';

import raptorsLogo from '../assets/icons/raptors-logo.svg';
import bell from '../assets/icons/notification-bell.svg';
import settingsIcon from '../assets/icons/settings-icon.svg';
import kobe from '../assets/imgs/kobe.png';

const Header = () => {
    return (
        <div className="header-container">
            <div className="team">
                <button className="logo-container">
                    <img src={raptorsLogo} title="raptors logo" alt="raptors logo"></img>
                    <span>Toronto Raptors</span>
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

export default Header;