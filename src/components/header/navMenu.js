import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navMenu.module.scss';

const NavMenu = ({ selectedTeamColor }) => {
    return (
        <div className={styles.links}>
            <div className={styles.linkContainer}>
                <NavLink 
                    to='/' 
                    exact 
                    activeStyle={{ color: `${selectedTeamColor}`, borderBottom: `4px solid ${selectedTeamColor}` }}
                >
                    Players
                </NavLink>
            </div>
            <div className={styles.linkContainer}>
                <NavLink 
                    to='/standings' 
                    activeStyle={{ color: `${selectedTeamColor}`, borderBottom: `4px solid ${selectedTeamColor}` }}
                >
                    Standings
                </NavLink>
            </div>
            <div className={styles.linkContainer}>
                <NavLink 
                    to='/games' 
                    activeStyle={{ color: `${selectedTeamColor}`, borderBottom: `4px solid ${selectedTeamColor}` }}
                >
                    Games
                </NavLink>
            </div>
        </div>
    );
}

export default NavMenu;