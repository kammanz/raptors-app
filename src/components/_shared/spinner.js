import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';

const Spinner = ({ containerHeight = '48', isLoading, ...props }) => (
  <ScaleLoader
    css={css`
      display: flex;
      align-items: center;
      height: ${containerHeight}px;
    `}
    height={8}
    width={3}
    radius={2}
    margin={2}
    color={'lightgrey'}
    loading={isLoading}
    {...props}
  />
);

export default Spinner;
