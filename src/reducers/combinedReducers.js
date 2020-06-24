import { combineReducers } from 'redux';
import getPlayersReducer from './getPlayersReducer';
import getSelectedTeamReducer from './getSelectedTeamReducer';
import playerDetailsReducer from './playerDetailsReducer';

export default combineReducers({
  players: getPlayersReducer,
  player: playerDetailsReducer,
  teams: getSelectedTeamReducer,
});
