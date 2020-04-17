import { combineReducers } from 'redux';
import playersListReducer from './playersListReducer';
import playerDetailsReducer from './playerDetailsReducer';
import teamsListReducer from './teamsListReducer';
import getGamesReducer from './getGamesReducer';
import getSelectedTeamReducer from './getSelectedTeamReducer';
import getTeamsConfigReducer from './getTeamsConfigReducer';
import getTeamColorReducer from './getTeamColorReducer';

export default combineReducers({
    players: playersListReducer,
    player: playerDetailsReducer,
    teams: teamsListReducer,
    selectedTeam: getSelectedTeamReducer,
    selectedTeamColor: getTeamColorReducer,
    games: getGamesReducer,
    teamsConfig: getTeamsConfigReducer,
});
