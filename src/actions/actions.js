import dataNbaNet from '../apis/dataNbaNet';

export const getPlayers = () => async dispatch => {
    const response = await dataNbaNet.get('/json/cms/noseason/team/raptors/roster.json');
    dispatch({ type: 'GET_PLAYERS', payload: response.data.sports_content.roster.players.player });
};

export const selectPlayer = (player) => async dispatch => {
    dispatch({ type: 'PRELOAD_PLAYER', payload: player });
    const response = await dataNbaNet.get("/prod/v1/2019/players/" + player.person_id + "_profile.json");
    dispatch({ type: 'SELECT_PLAYER', payload: response.data.league.standard.stats.latest });
};
