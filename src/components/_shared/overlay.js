import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './overlay.module.scss';

const Overlay = ({ isLoading }) => {
    if(!isLoading) {
        return <div className={styles.overlayWhite} />;
    }
    return <div />;
};

const mapStateToProps = state => {
    return { teams: state.teams };
};

Overlay.propTypes = {
    isLoading: PropTypes.bool,
};

Overlay.defaultProps = {
    isLoading: true,
}

export default connect(mapStateToProps)(Overlay);
