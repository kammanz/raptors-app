import { combineReducers } from 'redux';
import getPlayersReducer from './getPlayersReducer';
import getSelectedPlayerReducer from './getSelectedPlayerReducer';
import getGamesReducer from './getGamesReducer';
import getSelectedTeamReducer from './getSelectedTeamReducer';
import getTeamsReducer from './getTeamsReducer';
import getTeamColorReducer from './getTeamColorReducer';
import setLoadingStateReducer from './setLoadingStateReducer';
import unsetLoadingStateReducer from './unsetLoadingStateReducer';

console.log(setLoadingStateReducer, 'jojo');

export default combineReducers({
    players: getPlayersReducer,
    player: getSelectedPlayerReducer,
    selectedTeam: getSelectedTeamReducer,
    selectedTeamColor: getTeamColorReducer,
    games: getGamesReducer,
    teams: getTeamsReducer,
    loadingState: setLoadingStateReducer,
    unsetLoadingState: unsetLoadingStateReducer,
});