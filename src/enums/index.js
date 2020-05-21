/**
 * Enum for common colors.
 * @readonly
 * @enum {string}
 */
export const COLORS = Object.freeze({
    LIGHT_GREY: '#F5F5F5',
    GREY: '#A8A8A8',
});

/**
 * Enum for teams object.
 * @readonly
 * @enum {{ TRI_CODE: string, NAME: string, ID: string }}
 */
export const TEAMS = Object.freeze({
    TOR: {
        TRI_CODE: 'TOR',
        NAME: 'raptors',
        ID: '1610612761',
    },
    PHI: {
        TRI_CODE: 'PHI',
        NAME: 'sixers',
        ID: '1610612755',
    }
});
