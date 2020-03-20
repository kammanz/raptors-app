import { combineReducers } from 'redux';
import playersListReducer from './playersListReducer.js';
import playerDetailsReducer from './playerDetailsReducer.js';

export default combineReducers({
    players: playersListReducer,
    player: playerDetailsReducer,
});
