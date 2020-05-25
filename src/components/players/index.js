import React from 'react';
import { connect } from 'react-redux'; 

import List from './list';
import Details from './details';
import Filters from './filters';
import Overlay from '../_shared/overlay';

import setImagesHaveLoaded from 'actions/actions';

import styles from './index.module.scss';

const PlayersPage = ({ imagesHaveLoaded }) => {
    console.log('imagesHaveLoaded', imagesHaveLoaded);
    // setImagesHaveLoaded();

    return (
        <div className={styles.container}>
            <Filters />
            <div className={styles.gallery}>
                <List />
                <Details />  
            </div>
            <Overlay isLoading={imagesHaveLoaded}/>
        </div>
    );
};

const mapStateToProps = state => {
    return { imagesHaveLoaded: state.imagesHaveLoaded };
};

export default connect(mapStateToProps)(PlayersPage);
