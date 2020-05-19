import dataNbaNet from '../apis/dataNbaNet';
import { TEAMS } from '../enums';
// import setLoadingStateReducer from '../reducers/setLoadingStateReducer';

export const getTeams = () => async dispatch => {
    // dispatch({ type: 'SET_LOADING', payload: true });
    const allTeamsResponse = await dataNbaNet.get('/prod/2019/teams_config.json');
    const nbaTeams = Object.values(allTeamsResponse.data.teams.config).filter(team => team.ttsName);
    dispatch({ type: 'GET_TEAMS', payload: nbaTeams });

    const defaultTeam = nbaTeams.find(team => team.teamId === TEAMS.TOR.ID);
    dispatch(getSelectedTeam(defaultTeam));
    // dispatch({ type: 'SET_LOADING', payload: "false" });
    // dispatch({ type: 'SET_LOADING', payload: "true" });
};

// export const setLoadingState = () => {
//     dispatch({ type: 'SET_LOADING', payload: true });
//     // dispatch({ type: 'LOADED', payload: false });
// };

// export const getLoadedState = () => {
//     dispa
// }

export const getSelectedTeam = team => async dispatch => {
    // dispatch(setLoadingState());
    dispatch({ type: 'SET_LOADING', payload: true });

    dispatch({ type: 'GET_SELECTED_TEAM', payload: team });
    dispatch({ type: 'GET_TEAM_COLOR', payload: team.primaryColor });
    dispatch({ type: 'PRELOAD_PLAYER', payload: null });

    const teamUrlName = (team.teamId === TEAMS.PHI.ID ? TEAMS.PHI.NAME : team.ttsName.split(' ').splice(-1)[0].toLowerCase());
    const teamRosterResponse = await dataNbaNet.get(`/json/cms/noseason/team/${teamUrlName}/roster.json`);
    const teamRoster = teamRosterResponse.data.sports_content.roster.players.player.map((player) => {
        return { ...player, teamColor: team.primaryColor };
    });
    dispatch({ type: 'GET_PLAYERS', payload: teamRoster });
    dispatch({ type: 'SET_LOADING', payload: false });
};

// export const setLoadingState = () => {
//     dispatch({ type: 'SET_LOADING', payload: true });
//     // dispatch({ type: 'LOADED', payload: false });
// };

export const getSelectedPlayer = player => async dispatch => {
    dispatch({ type: 'PRELOAD_PLAYER', payload: player });

    const playerResponse = await dataNbaNet.get(`/prod/v1/2019/players/${player.person_id}_profile.json`);
    dispatch({ type: 'UPDATE_PLAYER', payload: playerResponse.data.league.standard.stats.latest });

    const gamesResponse = await dataNbaNet.get(`/data/10s/prod/v1/2019/players/${player.person_id}_gamelog.json`);
    dispatch({ type: 'GET_GAMES', payload: { ...gamesResponse.data.league.standard }});
};