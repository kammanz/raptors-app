import React from 'react';
import { NavLink } from 'react-router-dom';
import bell from '../assets/imgs/notification-bell.svg';
import settingsIcon from '../assets/imgs/settings-icon.svg';
import kobe from '../assets/kobe.jpg';
import raptorsLogo2 from '../assets/imgs/raptors-logo2.svg';

const Header = () => {
    return (
        <div className="header-container">
            <div /*className="header-team"*/ className="team">
                <div className="logo-container">
                    <img src={raptorsLogo2} title="raptors logo" alt="raptors logo"></img>
                </div>
                <button>Toronto Raptors <i className="drop-down"></i></button>
            </div>

            <div className="header links">
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
            
            <div className="header user">
                <div>
                    <img src={bell} alt="notification-bell"></img>
                </div>
                <div>
                    <img src={settingsIcon} alt="settings-icon"></img>
                </div>
                <button>
                    <img src={kobe} alt="user-pic" height="25" className="user-pic"></img>
                    <div>Kobe Bryant</div>
                    <div className="drop-down user"></div>
                </button>
                
            </div>
        </div>
    );
}

export default Header;