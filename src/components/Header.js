import React from 'react';
import { Link } from 'react-router-dom';
import raptorsLogo from '../assets/raptors-logo-2.png';
import bell from '../assets/bell3.png';
import settingsIcon from '../assets/settings-icon3.png';
import kobe from '../assets/kobe.jpg';

const Header = () => {
    return (
        <div className="header container">
            <div className="header team">
                <div className="logo-container">
                    <img src={raptorsLogo} height="40" title="raptors logo" alt="raptors logo"></img>
                </div>
                <div>Toronto Raptors</div>
                <div className="drop-down">
                    <i className="down"></i>
                </div>
            </div>

            <div className="header links">
                <div className="link-container">
                    <Link to='/'>Players</Link>
                </div>
                <div className="link-container">
                    <Link to='/standings'>Standings</Link>
                </div>
                <div className="link-container">
                    <Link to='/games'>Games</Link>
                </div>
            </div>
            
            <div className="header user">
                <div>
                    <img src={bell} alt="notification-bell" height="20"></img>
                </div>
                <div>
                    <img src={settingsIcon} alt="settings-icon" height="20"></img>
                </div>
                <div>
                    <img src={kobe} alt="user-pic" height="20"></img>
                </div>
                <div>Kobe Bryant</div>
                <div className="drop-down user"></div>
            </div>
        </div>
    );
}

export default Header;