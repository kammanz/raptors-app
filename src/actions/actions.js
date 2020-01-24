import dataNbaNet from '../apis/dataNbaNet';

export const getPlayers = () => async dispatch => {
    const response = await dataNbaNet.get('/json/cms/noseason/team/raptors/roster.json');
    console.log('actiond.js/ response.data...', response.data.sports_content.roster.players.player);
    dispatch({ type: 'GET_PLAYERS', payload: response.data.sports_content.roster.players.player })
};



// import nba from 'nba-api-client';

// export const fetchPlayers = () => {
//     return async (dispatch) => {
//         const response = await nba.leaguePlayerGeneralStats({TeamID: 1610612761, Season: "2019-20"}).then((data) => Object.values(data.LeagueDashPlayerStats));
        
//         dispatch({ type: 'GET_PLAYERS_LIST', payload: response });
//     }
// };

export const selectPlayer = (player) => {
    if (!player) {
        return null;
    }
    return {
        type: 'SELECT_PLAYER',
        payload: player
    }
};
