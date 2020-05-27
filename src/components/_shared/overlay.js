import React from 'react';
import PropTypes from 'prop-types';

import styles from './overlay.module.scss';

const Overlay = ({isLoading}) => {
    return <div className={styles.overlayWhite} />;
};

Overlay.propTypes = {
    isLoading: PropTypes.bool,
};

Overlay.defaultProps = {
    isLoading: true,
}

export default Overlay;
