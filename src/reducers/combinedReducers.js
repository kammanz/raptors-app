import { combineReducers } from 'redux';
import playersListReducer from './playersListReducer';
import teamsReducer from './teamsReducer';
import playerDetailsReducer from './playerDetailsReducer';

export default combineReducers({
  players: playersListReducer,
  player: playerDetailsReducer,
  teams: teamsReducer,
});
