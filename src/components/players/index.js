import React from 'react';
import { connect } from 'react-redux'; 

import List from './list';
import Details from './details';
import Filters from './filters';
import Overlay from '../_shared/overlay';

import styles from './index.module.scss';

const PlayersPage = () => {
    return (
        <div className={styles.container}>
            <Filters />
            <div className={styles.gallery}>
                <List />
                <Details />  
            </div>
            <Overlay />
        </div>
    );
};

const mapStateToProps = state => {
    return { loadingState: state.loadingState };
};

export default connect(mapStateToProps)(PlayersPage);
