import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import { COLORS } from 'enums';

const Spinner = ({ 
  isLoading, 
  position, 
  top, 
  left, 
  containerHeight, 
  height,
  ...props }) => (

  <ScaleLoader
    css={css`
      position: ${position};
      top: ${top}%;    
      left: ${left}%;
      display: flex;
      align-items: center;
      height: ${containerHeight}px;
      z-index: 199;
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
  position: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
};

Spinner.defaultProps = {
  isLoading: false,
  position: 'relative',
  containerHeight: 48,
  height: 12,
};

export default Spinner;
