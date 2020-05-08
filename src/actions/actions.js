import dataNbaNet from '../apis/dataNbaNet';

export const getPlayers = () => async dispatch => {
    const response = await dataNbaNet.get('/json/cms/noseason/team/raptors/roster.json');
    dispatch({ type: 'GET_PLAYERS', payload: response.data.sports_content.roster.players.player });
};

export const getSelectedPlayer = (player) => async dispatch => {
    dispatch({ type: 'PRELOAD_PLAYER', payload: player });

    const playerResponse = await dataNbaNet.get(`/prod/v1/2019/players/${player.person_id}_profile.json`);
    dispatch({ type: 'UPDATE_PLAYER', payload: playerResponse.data.league.standard.stats.latest });
    
    const gamesResponse = await dataNbaNet.get(`/data/10s/prod/v1/2019/players/${player.person_id}_gamelog.json`);
    dispatch({ type: 'GET_GAMES', payload: { ...gamesResponse.data.league.standard }});
};

export const getTeams = () => async dispatch => {
    const response = await dataNbaNet.get('/prod/2019/teams_config.json');
    dispatch({ type: 'GET_TEAMS', payload: { ...response.data.teams.config }});
};
