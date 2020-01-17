import { combineReducers } from 'redux';
import playersListReducer from './playersListReducer.js';
import selectPlayerReducer from './selectPlayerReducer.js';

export default combineReducers({
    players: playersListReducer,
    selectPlayer: selectPlayerReducer
});
