import React from 'react';
import { connect } from 'react-redux'; 

import List from './list';
import Details from './details';
import Filters from './filters';
import Overlay from '../_shared/overlay';

// import setImagesHaveLoaded from 'actions/actions';

import styles from './index.module.scss';

const PlayersPage = ({ imagesHaveLoaded }) => {

    // console.log('here, imgs have loaded, want to see false (first)', imagesHaveLoaded);
    console.log('imagesHaveLoaded', imagesHaveLoaded);
    // setImagesHaveLoaded();

    return (
        <div className={styles.container}>
            <Filters />
            <div className={styles.gallery}>
                <List />
                <Details />  
            </div>
            {imagesHaveLoaded === false ? <Overlay imagesHaveLoaded={imagesHaveLoaded}/> : <div/>}
        </div>
    );
};

const mapStateToProps = state => {
    return { imagesHaveLoaded: state.imagesHaveLoaded };
};

export default connect(mapStateToProps)(PlayersPage);
