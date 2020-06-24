import { combineReducers } from 'redux';
import getPlayersReducer from './getPlayersReducer';
import getSelectedTeamReducer from './getSelectedTeamReducer';
// import getTeamsReducer from './getTeamsReducer';
import playerDetailsReducer from './playerDetailsReducer';

export default combineReducers({
  players: getPlayersReducer,
  player: playerDetailsReducer,
  selectedTeam: getSelectedTeamReducer,
  // teams: getTeamsReducer,
});
