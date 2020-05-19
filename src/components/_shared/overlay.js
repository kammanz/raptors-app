import React from 'react';
import { connect } from 'react-redux';

import styles from './overlay.module.scss';

const Overlay = ({loadingState, unsetLoadingState}) => {
    console.log(loadingState, 'set');
    console.log(unsetLoadingState, 'unset');

    if(unsetLoadingState) {
        return <div className={styles.overlayDark} />;
    }

        return <div className={styles.overlayWhite} />;
};

const mapStateToProps = state => {
    return { loadingState: state.loadingState, unsetLoadingState: state.unsetLoadingState };
};

export default connect(mapStateToProps)(Overlay);