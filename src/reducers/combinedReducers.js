import { combineReducers } from 'redux';
import playersListReducer from './playersListReducer.js';
import playerDetailsReducer from './playerDetailsReducer.js';
import teamsListReducer from './teamsListReducer.js';
import getGamesReducer from './getGamesReducer.js';
import selectedTeamReducer from './selectedTeamReducer.js';
import getTeams2Reducer from './getTeams2Reducer';

export default combineReducers({
    players: playersListReducer,
    player: playerDetailsReducer,
    teams: teamsListReducer,
    selectedTeam: selectedTeamReducer,
    games: getGamesReducer,
    teams2: getTeams2Reducer,
});
