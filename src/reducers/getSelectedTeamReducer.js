export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_SELECTED_TEAM':
      return action.payload;
    case 'GET_TEAM_COLOR':
      return { ...state, teamColor: action.payload };
    default:
      return state;
  }
};
