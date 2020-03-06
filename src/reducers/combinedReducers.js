import { combineReducers } from 'redux';
import playersListReducer from './playersListReducer.js';
import selectPlayerReducer from './selectPlayerReducer.js';
import todaysGameReducer from './todaysGameReducer.js';

export default combineReducers({
    players: playersListReducer,
    selectPlayer: selectPlayerReducer,
    todaysGame: todaysGameReducer,
});
