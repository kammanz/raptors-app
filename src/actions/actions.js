import dataNbaNet from '../apis/dataNbaNet';
import { SIXERS_TEAM, DEFAULT_TEAM } from '../enums/enums';

export const getTeams = () => async dispatch => {
    const allTeamsResponse = await dataNbaNet.get('/prod/2019/teams_config.json');
    const nbaTeamsArray = Object.values(allTeamsResponse.data.teams.config).filter(team => team.ttsName);
    dispatch({ type: 'GET_TEAMS', payload: nbaTeamsArray });
    
    const defaultTeam = nbaTeamsArray.find(team => team.teamId == DEFAULT_TEAM.TEAM_ID); 
    dispatch({ type: 'GET_SELECTED_TEAM', payload: defaultTeam });
    dispatch({ type: 'GET_TEAM_COLOR', payload: defaultTeam.primaryColor });

    const defaultRosterResponse = await dataNbaNet.get(`/json/cms/noseason/team/${DEFAULT_TEAM.URL_NAME}/roster.json`);
    const defaultRoster = defaultRosterResponse.data.sports_content.roster.players.player.map((player) => {
        return { ...player, teamColor: defaultTeam.primaryColor };
    });
    dispatch({ type: 'GET_PLAYERS', payload: defaultRoster });
};

export const getSelectedTeam = team => async dispatch => {
    dispatch({ type: 'GET_SELECTED_TEAM', payload: team });
    dispatch({ type: 'GET_TEAM_COLOR', payload: team.primaryColor });

    const teamUrlName = (team.teamId == SIXERS_TEAM.TEAM_ID ? SIXERS_TEAM.URL_NAME : team.ttsName.trim().split(' ').pop().toLowerCase());
    const teamRosterResponse = await dataNbaNet.get(`/json/cms/noseason/team/${teamUrlName}/roster.json`);
    const teamRoster = teamRosterResponse.data.sports_content.roster.players.player.map((player) => {
        return { ...player, teamColor: team.primaryColor };
    });
    dispatch({ type: 'GET_PLAYERS', payload: teamRoster });
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

    const defaultRosterResponse = await dataNbaNet.get(`/json/cms/noseason/team/${DEFAULT_TEAM.URL_NAME}/roster.json`);
    dispatch({ type: 'GET_PLAYERS', payload: defaultRosterResponse.data.sports_content.roster.players.player });
}; 
