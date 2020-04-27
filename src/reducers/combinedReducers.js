import { combineReducers } from 'redux';
import playersListReducer from './playersListReducer.js';
import selectPlayerReducer from './selectPlayerReducer.js';
import teamsListReducer from './teamsListReducer.js';
import getGamesReducer from './getGamesReducer.js';

export default combineReducers({
    players: playersListReducer,
    player: selectPlayerReducer,
    teams: teamsListReducer,
    games: getGamesReducer,
});
