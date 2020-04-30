import { combineReducers } from 'redux';

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