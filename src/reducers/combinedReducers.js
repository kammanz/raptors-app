import { combineReducers } from 'redux';
import playersListReducer from './playersListReducer.js';
import playerDetailsReducer from './playerDetailsReducer.js';
import teamsListReducer from './teamsListReducer.js';
import getGamesReducer from './getGamesReducer.js';

export default combineReducers({
    players: playersListReducer,
    player: playerDetailsReducer,
    teams: teamsListReducer,
    games: getGamesReducer,
});
