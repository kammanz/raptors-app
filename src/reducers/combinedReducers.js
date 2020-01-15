import { combineReducers } from 'redux';
import fetchPlayersReducer from './fetchPlayersReducer.js';
import selectPlayerReducer from './selectPlayerReducer.js';

export default combineReducers({
    players: fetchPlayersReducer,
    selectPlayer: selectPlayerReducer
});
