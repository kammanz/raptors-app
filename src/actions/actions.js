import nba from 'nba-api-client';

export const fetchPlayers = () => {
    return async (dispatch) => {
        const response = await nba.leaguePlayerGeneralStats({TeamID: 1610612761, Season: "2019-20"}).then(function(data) {
            const dataArray = Object.values(data.LeagueDashPlayerStats);
            return dataArray;
        });

        dispatch({ type: 'FETCH_PLAYERS', payload: response});
    }
};

export const selectPlayer = (player) => {
    if(!player) {
        return null;
    }
    return {
        type: 'SELECT_PLAYER',
        payload: player
    }
};
