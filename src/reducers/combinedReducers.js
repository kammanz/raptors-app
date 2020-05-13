import { combineReducers } from 'redux';

import getGamesReducer from './getGamesReducer';
import getSelectedTeamReducer from './getSelectedTeamReducer';
import getTeamsReducer from './getTeamsReducer';
import getTeamColorReducer from './getTeamColorReducer';
import getPlayersReducer from './getPlayersReducer.js';
import getSelectedPlayerReducer from './getSelectedPlayerReducer.js';

export default combineReducers({
    players: getPlayersReducer,
    player: getSelectedPlayerReducer,
    selectedTeam: getSelectedTeamReducer,
    selectedTeamColor: getTeamColorReducer,
    games: getGamesReducer,
    teams: getTeamsReducer,
});
