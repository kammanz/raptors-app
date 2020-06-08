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
 * @enum {{ TRI_CODE: string, NAME: string, ID: string }}
 */
export const TEAMS = Object.freeze({
  PHI: {
    TRI_CODE: 'PHI',
    NAME: 'sixers',
    ID: '1610612755',
  },
  TOR: {
    TRI_CODE: 'TOR',
    NAME: 'raptors',
    ID: '1610612761',
  },
});
