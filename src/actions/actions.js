import dataNbaNet from '../apis/dataNbaNet';

export const getPlayers = () => async dispatch => {
    const response = await dataNbaNet.get('/json/cms/noseason/team/raptors/roster.json');
    dispatch({ type: 'GET_PLAYERS', payload: response.data.sports_content.roster.players.player });
};

export const selectPlayer = (player) => async dispatch => {
    dispatch({ type: 'PRELOAD_PLAYER', payload: player });
    const response = await dataNbaNet.get(`/prod/v1/2019/players/${player.person_id}_profile.json`);
    dispatch({ type: 'UPDATE_PLAYER', payload: response.data.league.standard.stats.latest });
};

export const getGameStats = (playerId) => async dispatch => {
    const response = await dataNbaNet.get("/data/10s/prod/v1/2019/players/" + playerId + "_gamelog.json");
    // console.log(response.data.league.standard, 'getGameStats');
    dispatch({ type: 'GET_GAMESTATS', payload: { ...response.data.league.standard }});
}

export const getTeams = () => async dispatch => {
    const response = await dataNbaNet.get("/prod/2019/teams_config.json");
    // console.log(response.data.teams.config, 'getTeams');
    dispatch({ type: 'GET_TEAMS', payload: { ...response.data.teams.config }});
}
