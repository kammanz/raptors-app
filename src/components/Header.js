import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import bell from '../assets/bell7.png';
import settingsIcon from '../assets/settings-icon7.png';
import kobe from '../assets/kobe.jpg';
import raptorsLogo2 from '../assets/imgs/raptors-logo2.svg';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-team">
                <div className="logo-container">
                    <img src={raptorsLogo2} title="raptors logo" alt="raptors logo"></img>
                </div>
                <button>Toronto Raptors <i className="drop-down"></i></button>
                {/* <div className="drop-down">
                    
                </div> */}
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
                    <img src={bell} alt="notification-bell" height="25"></img>
                </div>
                <div>
                    <img src={settingsIcon} alt="settings-icon" height="25"></img>
                </div>
                <div >
                    <img src={kobe} alt="user-pic" height="30" className="user-pic"></img>
                </div>
                <div>Kobe Bryant</div>
                <div className="drop-down user"></div>
            </div>
        </div>
    );
}

export default Header;