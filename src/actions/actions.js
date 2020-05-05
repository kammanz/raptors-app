import dataNbaNet from '../apis/dataNbaNet';

export const getTeams = () => async dispatch => {
    const allTeamsResponse = await dataNbaNet.get('/prod/2019/teams_config.json');
    const nbaTeamsArray = Object.values(allTeamsResponse.data.teams.config).filter(team => team.ttsName);
    dispatch({ type: 'GET_TEAMS', payload: nbaTeamsArray });
    console.log(nbaTeamsArray);
    
    const raptorsTeam = nbaTeamsArray.find(team => team.teamId === '1610612761'); 
    dispatch({ type: 'GET_SELECTED_TEAM', payload: raptorsTeam });
    dispatch({ type: 'GET_TEAM_COLOR', payload: raptorsTeam.primaryColor });

    const raptorsRosterResponse = await dataNbaNet.get('/json/cms/noseason/team/raptors/roster.json');
    dispatch({ type: 'GET_PLAYERS', payload: raptorsRosterResponse.data.sports_content.roster.players.player });
};

export const getSelectedTeam = team => async dispatch => {
    dispatch({ type: 'GET_SELECTED_TEAM', payload: team });

    dispatch({ type: 'GET_TEAM_COLOR', payload: team.primaryColor });

    const teamUrlName = () => {
        if (team.ttsName === 'Philadelphia 76ers') {
            return 'sixers';
        }
        return team.ttsName.trim().split(' ').pop().toLowerCase();
    };
    const teamRosterResponse = await dataNbaNet.get(`/json/cms/noseason/team/${teamUrlName()}/roster.json`);
    dispatch({ type: 'GET_PLAYERS', payload: teamRosterResponse.data.sports_content.roster.players.player });
};

export const getPlayers = teamName => async dispatch => {
    const response = await dataNbaNet.get(`/json/cms/noseason/team/${teamName}/roster.json`);
    dispatch({ type: 'GET_PLAYERS', payload: response.data.sports_content.roster.players.player });
};

export const getSelectedPlayer = player => async dispatch => {
    dispatch({ type: 'PRELOAD_PLAYER', payload: player });

    const playerResponse = await dataNbaNet.get(`/prod/v1/2019/players/${player.person_id}_profile.json`);
    dispatch({ type: 'UPDATE_PLAYER', payload: playerResponse.data.league.standard.stats.latest });
    
    const gamesResponse = await dataNbaNet.get(`/data/10s/prod/v1/2019/players/${player.person_id}_gamelog.json`);
    dispatch({ type: 'GET_GAMES', payload: { ...gamesResponse.data.league.standard }});
};

export const getTeamRosters = () => async dispatch => {
    const allTeamsRosterResponse = await dataNbaNet.get('/prod/v1/2019/teams.json');
    const allTeamsRosterArray = Object.values(allTeamsRosterResponse.data.league.standard);
    const nbaTeamsRosterArray = allTeamsRosterArray.filter(teamRoster => teamRoster.isNBAFranchise);
    dispatch({ type: 'GET_TEAM_ROSTERS', payload: nbaTeamsRosterArray });

    const raptorsRosterResponse = await dataNbaNet.get('/json/cms/noseason/team/raptors/roster.json');
    dispatch({ type: 'GET_PLAYERS', payload: raptorsRosterResponse.data.sports_content.roster.players.player });
}; 
