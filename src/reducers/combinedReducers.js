import { combineReducers } from 'redux';
<<<<<<< HEAD
import playersListReducer from './playersListReducer';
import playerDetailsReducer from './playerDetailsReducer';
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
=======

import getPlayersReducer from './getPlayersReducer.js';
import getSelectedPlayerReducer from './getSelectedPlayerReducer.js';
import getTeamsReducer from './getTeamsReducer.js';
import getGamesReducer from './getGamesReducer.js';

export default combineReducers({
    players: getPlayersReducer,
    player: getSelectedPlayerReducer,
    teams: getTeamsReducer,
    games: getGamesReducer,
});
>>>>>>> RAP-37__Player-details-recent-games
