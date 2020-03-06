import dataNbaNet from '../apis/dataNbaNet';

export const getPlayers = () => async dispatch => {
    const response = await dataNbaNet.get('/json/cms/noseason/team/raptors/roster.json');
    dispatch({ type: 'GET_PLAYERS', payload: response.data.sports_content.roster.players.player })
};

export const selectPlayer = (playerId, playerFirstName, playerLastName, playerPosition, playerJerseyNumber) => async dispatch => {
    if (!playerId) {
        return null;
    };

    const response = await dataNbaNet.get("/prod/v1/2019/players/" + playerId + "_profile.json");

    // console.log(response, 'here');
    dispatch({ type: 'SELECT_PLAYER', payload: { ...response.data.league.standard.stats.latest, playerId, playerFirstName, playerLastName, playerPosition, playerJerseyNumber }});    
};

export const todaysGame = (personId) => async dispatch => {
    const response = await dataNbaNet.get("/prod/v1/2019/players/" + personId + "_gamelog.json");

    // console.log(response.data.league.standard[0] , 'here');

    dispatch({ type: 'TODAYS_GAME', payload: { ...response.data.league.standard[0] }});
}

export const selectedTeam = () => async dispatch => {
    const response = await dataNbaNet.get("/prod/v1/2016/teams.json");

    console.log(response, 'teams');

    dispatch({ type: 'SELECTED_TEAM', payload: { ...response }})
}
