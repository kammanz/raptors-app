import dataNbaNet from '../apis/dataNbaNet';

// TO DO: get team action 

export const getSelectedTeam = (team) => async dispatch => {
    dispatch({ type: 'GET_SELECTED_TEAM', payload: team });

    dispatch({ type: 'GET_TEAM_COLOR', payload: team.primaryColor });

    console.log(team.primaryColor, 'is the new team color, updated');
    const playersResponse = await dataNbaNet.get(`/json/cms/noseason/team/${team.urlName}/roster.json`);

    dispatch({ type: 'GET_PLAYERS', payload: playersResponse.data.sports_content.roster.players.player });
};

export const getPlayers = (teamName) => async dispatch => {
    // const url = team.url;

    // console.log(props, 'props');
    if(!teamName) {
        console.log('what up');
    } 

    if (teamName) {
        console.log('teem?!');
    }

    // console.log(team.urlName, 'fuckey duckey');
    const response = await dataNbaNet.get(`/json/cms/noseason/team/${teamName}/roster.json`);
    console.log(response, 'bill');
    dispatch({ type: 'GET_PLAYERS', payload: response.data.sports_content.roster.players.player });
   
};

export const getSelectedPlayer = (player) => async dispatch => {
    dispatch({ type: 'PRELOAD_PLAYER', payload: player });

    const playerResponse = await dataNbaNet.get(`/prod/v1/2019/players/${player.person_id}_profile.json`);
    dispatch({ type: 'UPDATE_PLAYER', payload: playerResponse.data.league.standard.stats.latest });
    
    const gamesResponse = await dataNbaNet.get(`/data/10s/prod/v1/2019/players/${player.person_id}_gamelog.json`);
    dispatch({ type: 'GET_GAMES', payload: { ...gamesResponse.data.league.standard }});
};

export const getTeamsConfig = () => async dispatch => {
    const response = await dataNbaNet.get("/prod/2019/teams_config.json");

    const teamsConfigArray = Object.values(response.data.teams.config).filter((team)=> team.ttsName);
  
    dispatch({ type: 'GET_TEAMS_CONFIG', payload: teamsConfigArray });
    
    const raptors = teamsConfigArray.find(team => team.teamId == 1610612761); 

    dispatch({ type: 'GET_SELECTED_TEAM', payload: raptors });

    

    dispatch({ type: 'GET_TEAM_COLOR', payload: raptors.primaryColor });

    console.log(raptors.primaryColor, 'is first team color');
};

export const getTeamsConfig2 = () => async dispatch => {
    const response = await dataNbaNet.get('/prod/v1/2019/teams.json');
    // console.log(response.data.league.standard.city, 'here');
    const fuckFace = { ...response.data.league.standard }; 
    const arr = Object.values(fuckFace);
    const newArray = arr.filter(team => team.isNBAFranchise);
    
    dispatch({ type: 'GET_TEAMS2', payload: newArray });

    
    // dispatch({ type: 'GET_SELECTED_TEAM', payload: raptors });

    const raptorsResponse = await dataNbaNet.get(`/json/cms/noseason/team/raptors/roster.json`);

    dispatch({ type: 'GET_PLAYERS', payload: raptorsResponse.data.sports_content.roster.players.player });
} 
