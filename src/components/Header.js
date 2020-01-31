import React from 'react';
import { Link } from 'react-router-dom';
import StandingsPage from './standings/StandingsPage';

const Header = () => {
    return (
        <ul className="nav-bar">
            <li>Raptors logo</li>
            <Link to='/'>Players</Link>
            <Link to='/teams'>Team</Link>
            <Link to='/games'>Games</Link>
            <li>username</li>
        </ul>
    );
}

export default Header;