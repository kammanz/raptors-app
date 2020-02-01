import dataNbaNet from '../apis/dataNbaNet';

export const getPlayers = () => async dispatch => {
    const response = await dataNbaNet.get('/json/cms/noseason/team/raptors/roster.json');
    dispatch({ type: 'GET_PLAYERS', payload: response.data.sports_content.roster.players.player })
};

export const selectPlayer = (playerId, playerName) => async dispatch => {
    if (!playerId) {
        return null;
    };

    const response = await dataNbaNet.get("/prod/v1/2019/players/" + playerId + "_profile.json");
    dispatch({ type: 'SELECT_PLAYER', payload: {...response.data.league.standard.stats.latest, playerName, playerId }});    
};
