import dataNbaNet from 'apis/dataNbaNet';
import { TEAMS, teamColors } from 'enums';

const resetPlayers = new Array(20).fill({});

export const getTeams = () => async (dispatch) => {
  dispatch({ type: 'GET_PLAYERS', payload: resetPlayers });

  const allTeamsResponse = await dataNbaNet.get('/prod/v1/2019/teams.json');
  const nbaTeams = Object.values(allTeamsResponse.data.league.standard).filter((team) => team.isNBAFranchise);

  // const nbaTeamsWithColor = nbaTeams.forEach((team) =>
  //   teamColors.find((teamColor) => team.tricode === teamColor.tricode && { ...team, teamColor: teamColor.color })
  // );

  const teamsAndColor = nbaTeams.map((team) => {
    return {
      ...team,
      teamColor: teamColors.find((teamColor) => team.tricode === teamColor.tricode && teamColor.color),
    };
  });

  // console.log(teamsAndColor, 'teamsAndColor');

  dispatch({ type: 'GET_TEAMS', payload: teamsAndColor });

  const defaultTeam = teamsAndColor.find((team) => team.teamId === TEAMS.TOR.ID);
  dispatch(getSelectedTeam(defaultTeam));
};

export const getSelectedTeam = (team) => async (dispatch) => {
  // reset players list and details
  dispatch({ type: 'GET_PLAYERS', payload: resetPlayers });
  dispatch({ type: 'PRELOAD_PLAYER_DETAILS', payload: null });
  // set selected team
  dispatch({ type: 'GET_SELECTED_TEAM', payload: team });
  dispatch({ type: 'GET_TEAM_COLOR', payload: team.teamColor.color });

  const teamRosterResponse = await dataNbaNet.get(`/json/cms/noseason/team/${team.urlName}/roster.json`);
  const teamRoster = teamRosterResponse.data.sports_content.roster.players.player.map((player) => {
    return { ...player, teamColor: team.teamColor.color };
  });
  dispatch({ type: 'GET_PLAYERS', payload: teamRoster });
};

export const getSelectedPlayer = (player) => async (dispatch) => {
  dispatch({ type: 'SET_PLAYER_DETAILS_IS_LOADING', payload: true });
  dispatch({ type: 'PRELOAD_PLAYER_DETAILS', payload: player });

  const playerResponse = await dataNbaNet.get(`/prod/v1/2019/players/${player.person_id}_profile.json`);
  const gamesResponse = await dataNbaNet.get(`/data/10s/prod/v1/2019/players/${player.person_id}_gamelog.json`);
  dispatch({ type: 'UPDATE_PLAYER_DETAILS', payload: playerResponse.data.league.standard.stats.latest });
  dispatch({ type: 'SET_RECENT_GAMES', payload: { ...gamesResponse.data.league.standard } });
  dispatch({ type: 'SET_PLAYER_DETAILS_IS_LOADING', payload: false });
};
