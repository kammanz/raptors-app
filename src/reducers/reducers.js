import { combineReducers } from 'redux';
import playersReducer from './playersReducer.js';

// here is where we import and send all our reducers to one big reducer object that holds them.

export default combineReducers({
    players: playersReducer
});
