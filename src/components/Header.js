import React from 'react';

import { NavLink } from 'react-router-dom';

import bell from '../assets/icons/notification-bell.svg';
import settingsIcon from '../assets/icons/settings-icon.svg';

import kobe from '../assets/imgs/kobe.jpg';

const Header = () => {
    return (
        <div className="header-container">
            <div className="team">
                <div className="logo-container">
                    <img src="https://cdn.nba.net/assets/logos/teams/secondary/web/TOR.svg" height="28" title="raptors logo" alt="raptors logo"></img>
                </div>
                <button>Toronto Raptors <i className="drop-down-team"></i></button>
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
                <div>
                    <img src={bell} alt="notification-bell"></img>
                </div>
                <div>
                    <img src={settingsIcon} alt="settings-icon"></img>
                </div>
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