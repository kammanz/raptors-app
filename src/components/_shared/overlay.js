import React from 'react';
import PropTypes from 'prop-types';

import styles from './overlay.module.scss';

const Overlay = ({ imagesHaveLoaded }) => {
    console.log('want to see false then true', imagesHaveLoaded);
    return <div className={styles.overlayDark} />;
};

Overlay.propTypes = {
    isLoading: PropTypes.bool,
};

Overlay.defaultProps = {
    isLoading: true,
}

export default Overlay;
