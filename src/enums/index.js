import React from 'react';

import TOR from 'assets/logos/TOR';
import PHI from 'assets/logos/PHI';

/**
 * Enum for common colors.
 * @readonly
 * @enum {string}
 */
export const COLORS = Object.freeze({
  LIGHT_GREY: '#f5f5f5',
  GREY: '#a8a8a8',
});

/**
 * Enum for teams object.
 * @readonly
 * @enum {{ TRI_CODE: string, NAME: string, ID: string, LOGO: jsx, }}
 */
export const TEAMS = Object.freeze({
  TOR: {
    TRI_CODE: 'TOR',
    NAME: 'raptors',
    ID: '1610612761',
    LOGO: <TOR />,
  },
  PHI: {
    TRI_CODE: 'PHI',
    NAME: 'sixers',
    ID: '1610612755',
    LOGO: <PHI />,
  },
});
