import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul className="nav-bar">
            <li className="header team-name">Toronto Raptors</li>
            <Link to='/'>Players</Link>
            <Link to='/standings'>Standings</Link>
            <Link to='/games'>Games</Link>
            <li>username</li>
        </ul>
    );
}

export default Header;