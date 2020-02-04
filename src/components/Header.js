import React from 'react';
import { Link } from 'react-router-dom';
import raptorsLogo from '../assets/raptors-logo-2.png';

const Header = () => {
    return (
        <div className="header container">
            <div className="header team">
                <div className="logo-container">
                    <img src={raptorsLogo} height="50" title="raptors logo" alt="raptors logo"></img>
                </div>
                <div>Toronto Raptors</div>
                <div>Dropdown</div>
            </div>
            {/* <div className=" header slanted-border"></div> */}
            <div className="header links">
                <Link to='/'>Players</Link>
                <Link to='/standings'>Standings</Link>
                <Link to='/games'>Games</Link>
            </div>
            
            <div className="header user">username</div>
        </div>
    );
}

export default Header;