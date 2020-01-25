import dataNbaNet from '../apis/dataNbaNet';

export const getPlayers = () => async dispatch => {
    const response = await dataNbaNet.get('/json/cms/noseason/team/raptors/roster.json');
    dispatch({ type: 'GET_PLAYERS', payload: response.data.sports_content.roster.players.player })
};

export const selectPlayer = (player) => async dispatch => {
    if (!player) {
        return null;
    };

    const response = await dataNbaNet.get("/prod/v1/2019/players/" + player + "_profile.json");

    console.log('response object', response.data.league.standard.stats.latest);

    dispatch({ type: 'SELECT_PLAYER', payload: response.data.league.standard.stats.latest});    
};
