import { combineReducers } from 'redux';
import playersListReducer from './playersListReducer.js';
import selectPlayerReducer from './selectPlayerReducer.js';
import isClickedReducer from './isClickedReducer.js';

export default combineReducers({
    players: playersListReducer,
    selectPlayer: selectPlayerReducer,
    isClicked: isClickedReducer,
});
