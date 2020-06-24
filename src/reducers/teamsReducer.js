export default (
  state = {
    teams: [],
    selectedTeam: {
      urlName: 'raptors', // TODO: set team based on user's geographical location
    },
  },
  action
) => {
  switch (action.type) {
    case 'SET_TEAMS':
      return { ...state, teams: action.payload };
    case 'SET_SELECTED_TEAM':
      return { ...state, selectedTeam: action.payload };
    default:
      return state;
  }
};
