/**
 * Formats url string for specific static player image
 *
 * @param {string} playerTeamId
 * @param {string} personId
 * @param {string} year
 * @returns {string}
 */
export const getPlayerPhotoUrl = (playerTeamId, personId, year = '2019') =>
  `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${playerTeamId}/${year}/260x190/${personId}.png`
