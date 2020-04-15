import React from 'react';
import { connect } from 'react-redux';

import List from './list';
import Details from './details';
// import { getPlayers } from '../actions/actions.js';

import styles from './index.module.scss';
// import { selectedTeam } from '../../actions/actions';

const PlayersPage = () => {
    return (
        <div className={styles.playersContainer}>
            <List />
            <Details />
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return { selectedTeam: state.selectedTeam };
// };

export default PlayersPage;
