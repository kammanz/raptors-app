import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/_shared/spinner';

import styles from './overlay.module.scss';

const Overlay = ({ isLoading }) => {
    return (
        <div className={styles.container}>
            <Spinner height={40} isLoading={isLoading} />
        </div>
    );
};

Overlay.propTypes = {
    isLoading: PropTypes.bool,
};

Overlay.defaultProps = {
    isLoading: true,
}

export default Overlay;
