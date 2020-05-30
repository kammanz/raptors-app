import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import { COLORS } from 'enums';

const Spinner = ({ 
    isLoading, 
    containerHeight, 
    height,
    ...props
  }) => (

  <ScaleLoader
    css={css`
      display: flex;
      align-items: center;
      height: ${containerHeight}px;
    `}
    height={height}
    width={2}
    radius={2}
    margin={2}
    color={COLORS.GREY}
    loading={isLoading}
    {...props}
  />
);

Spinner.propTypes = {
  isLoading: PropTypes.bool,
  containerHeight: PropTypes.number,
  height: PropTypes.number,
};

Spinner.defaultProps = {
  isLoading: false,
  containerHeight: 48,
  height: 12,
};

export default Spinner;
