import dataNbaNet from '../apis/dataNbaNet';

export const getPlayers = async dispatch => {
        const response = await dataNbaNet.get('/json/cms/noseason/team/pistons/roster.json');
        console.log('here', response);
        dispatch({ type: 'GET_PLAYERS', payload: response});
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
