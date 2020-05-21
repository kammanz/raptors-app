import React from 'react';
import { connect } from 'react-redux';

import styles from './overlay.module.scss';

const Overlay = ({ loadingState }) => {

    if(loadingState) {
        return <div className={styles.overlayWhite} />;
    }

        return <div />;
};

const mapStateToProps = state => {
    return { loadingState: state.loadingState };
};

export default connect(mapStateToProps)(Overlay);