import React from 'react';
import PropTypes from 'prop-types';

import styles from './overlay.module.scss';

const Overlay = ({ children, isLoading }) => {
    return (
        <div style={isLoading ? { visibility: 'visible' } : { visibility: 'hidden' }} className={styles.container}>
            {children}
        </div>
    );
};

Overlay.propTypes = {
    children: PropTypes.node,
    isLoading: PropTypes.bool,
};

Overlay.defaultProps = {
    children: null,
    isLoading: true,
};

export default Overlay;
