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

export const teamColors = [
  { tricode: 'ATL', color: '#e21a37' },
  { tricode: 'BKN', color: '#000000' },
  { tricode: 'BOS', color: '#00611b' },
  { tricode: 'CHA', color: '#00848e' },
  { tricode: 'CHI', color: '#b00203' },
  { tricode: 'CLE', color: '#860038' },
  { tricode: 'DAL', color: '#006bb6' },
  { tricode: 'DEN', color: '#0e2240' },
  { tricode: 'DET', color: '#fa002c' },
  { tricode: 'GSW', color: '#003399' },
  { tricode: 'HOU', color: '#cd212b' },
  { tricode: 'IND', color: '#ffb517' },
  { tricode: 'LAC', color: '#ed174b' },
  { tricode: 'LAL', color: '#fdba33' },
  { tricode: 'MEM', color: '#5d76a9' },
  { tricode: 'MIA', color: '#98002e' },
  { tricode: 'MIL', color: '#00471b' },
  { tricode: 'MIN', color: '#2b6291' },
  { tricode: 'NOP', color: '#0c2340' },
  { tricode: 'NYK', color: '#f58426' },
  { tricode: 'OKC', color: '#002d62' },
  { tricode: 'ORL', color: '#0077c0' },
  { tricode: 'PHI', color: '#ef0022' },
  { tricode: 'PHX', color: '#e76221' },
  { tricode: 'POR', color: '#cc0000' },
  { tricode: 'SAC', color: '#51388a' },
  { tricode: 'SAS', color: '#959191' },
  { tricode: 'TOR', color: '#bd1b21' },
  { tricode: 'UTA', color: '#f9a11e' },
  { tricode: 'WAS', color: '#cf142b' },
];
