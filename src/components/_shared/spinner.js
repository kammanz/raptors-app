import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import { COLORS } from 'enums';

const Spinner = ({ isLoading, containerHeight, ...props }) => (
  <ScaleLoader
    css={css`
      display: flex;
      align-items: center;
      height: ${containerHeight}px;
    `}
    height={12}
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
};

Spinner.defaultProps = {
  isLoading: false,
  containerHeight: 48,
};

export default Spinner;
