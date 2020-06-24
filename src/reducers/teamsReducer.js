export default (
  state = {
    urlName: 'raptors', // TODO: set team based on user's geographical location
    teams: [],
    selectedTeam: {},
  },
  action
) => {
  switch (action.type) {
    case 'GET_TEAMS':
      return { ...state, teams: action.payload };
    case 'GET_SELECTED_TEAM':
      return { ...state, selectedTeam: action.payload };
    default:
      return state;
  }
};
