import { combineReducers } from 'redux';
import playersListReducer from './playersListReducer';
import playerDetailsReducer from './playerDetailsReducer';
import teamsListReducer from './teamsListReducer';
import getGamesReducer from './getGamesReducer';
import getSelectedTeamReducer from './getSelectedTeamReducer';
import getTeamsReducer from './getTeamsReducer';
import getTeamColorReducer from './getTeamColorReducer';

export default combineReducers({
    players: playersListReducer,
    player: playerDetailsReducer,
    // NOTE: I'll fix and rename the teams list reducer in a separate branch
    // teams: teamsListReducer,
    selectedTeam: getSelectedTeamReducer,
    selectedTeamColor: getTeamColorReducer,
    games: getGamesReducer,
    teams: getTeamsReducer,
});
